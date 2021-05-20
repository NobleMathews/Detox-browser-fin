const { parse } = require('tldts');

const optionsT = {
    extras:{}
};

var options={
    extras:{

    }
}
var blurblackOption = true;
var blacklist;
function updateOptions() {
    var wordlist, blacklisti;
    return new Promise((resolve, reject)=>{
        chrome.storage.sync.get(['polarlist', 'blacklist', 'blurblackOption'], function(result) {
            blurblackOption = result.blurblackOption;
            if(result.polarlist || result.blacklist){
                let extrasD={};
                if(result.polarlist)
                wordlist = result.polarlist.toLowerCase().split('\n').filter(Boolean);
                else
                wordlist=[];
                if(result.blacklist){
                blacklisti = result.blacklist.toLowerCase().split('\n').filter(Boolean);
                blacklist = blacklisti;
                }
                wordlist.map(function(v){
                    let elementary = v.split(":");
                    extrasD = Object.assign({ [elementary[1].replace(/\s/g, '+')]:parseInt(elementary[0])}, extrasD);
                });
                const upd = Object.create(optionsT);
                upd.extras = extrasD;
                options = upd;
                resolve(upd);
            }
            else{
                resolve(options);
            }
            
        });
    })
}

// const sensitivePattern = '(word|last)';
// const sensitiveRegex = new RegExp(sensitivePattern, 'i');
// let isTextSensitive = function (text) {
//     if (sensitiveRegex.test(text)) {
//       return true;
//     } else {
//       return false;
//     }
// }

function getText(domElement) {
    var clean = ["Featured snippet from the web ","Web results ","...","People also search for"]
    var root = domElement;
    var text = [];
  
    function traverseTree(root) {
      Array.prototype.forEach.call(root.childNodes, function(child) {
        if (child.nodeType === 3) {
          var str = child.nodeValue.trim();
          if (str.length > 0) {
            if (str[0]=='>' || str.substring(0, 6) == "(funct") {
            }
            else{
                text.push(str);
            }
          }
        } else {
          traverseTree(child);
        }
      });
    }
    traverseTree(root);
    var result = text.join(' ');
    clean.forEach(el=>
        result = result.replaceAll(el,' ')
    );
    return result
}
(function() {
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var Detoxer = {
        currentUrl: {},
        ignoreList:[], 
        constants: {
            queries: {
                result_links: '.g div > a[href*="http"]', 
                story_links: 'g-inner-card div > a[href*="http"]',
                news_links: 'g-card > div > a[href*="http"], g-card > div > div > a[href*="http"], g-card > div > div > div > a[href*="http"], g-card > div > div > div > div > a[href*="http"]', 
                video_links: '.QmUzgb div > a[href*="http"]',
                link_parent_node: '#rso div.g',
                link_news_node: '#rso g-card',
                link_story_node: '#rso g-inner-card',
                link_video_node: '#rso .QmUzgb', 
                main_google_node: 'main'
            }, 
            events: {
                get_info: 'get_tId_and_wId', 
                inactive: 'inactive', 
                active: 'active'
            }, 
            console: {
                needs_to_be_updated: 'Selectors may need to be updated!', 
                removed: 'Links were analysed from this search.'
            }, 
            observerConfig: { childList: true, subtree: true }
        }, 
        init: function() {
            var mainGoogleNode = document.getElementById(this.constants.queries.main_google_node);
            /* avoiding google new tab page and other variations */
            if(!mainGoogleNode) {
                return chrome.runtime.sendMessage({ event: this.constants.events.inactive, url: window.location.href });
            } 
            chrome.runtime.sendMessage({ event: this.constants.events.get_info }, (info) => {
                var tId = info.tId;
                var wId = info.wId;
                this.currentUrl[wId] = this.currentUrl[wId] ? this.currentUrl[wId] : {};
                this.currentUrl[wId][tId] = window.location.href;
                this.remove(info);
                this.createResultsObserver(mainGoogleNode);
            });
        }, 
        getAllLinks: function() {
            let normy_links = document.querySelectorAll(this.constants.queries.result_links);
            let story_links = document.querySelectorAll(this.constants.queries.story_links);
            let news_links = document.querySelectorAll(this.constants.queries.news_links);
            let video_links = document.querySelectorAll(this.constants.queries.video_links);
            return  Array.prototype.concat.call(...normy_links , ...story_links, ...news_links, ...video_links);
        }, 
        remove: function(info) {
            var tId = info.tId;
            var wId = info.wId;
            // ignoring dropdown items and huge card on the right
            var links = Array.from(this.getAllLinks()).filter(function (link) {
                var isAccordionItem = Boolean(link.closest('g-accordion-expander'))
                var isHugeCardOnTheRight = Boolean(link.closest('#wp-tabs-container'))
                var isFeatured = Boolean(link.closest(".xpdopen"))
                // if(Boolean(link.closest('g-inner-card'))){
                //     console.log(link);
                // }
                // .ULSxyf
                return !isAccordionItem && !isHugeCardOnTheRight && !isFeatured;
            });
            var count = links.length;
            if(!count) {
                if(!this.isSameUrl(window.location.href, info)) {
                    chrome.runtime.sendMessage({ event: this.constants.events.inactive });
                    this.currentUrl[wId][tId] = window.location.href;
                }
                return;
            }
            this.currentUrl[wId][tId] = window.location.href;
            chrome.runtime.sendMessage({ event: this.constants.events.active, count: count });
            // console.info(count + ' ' + this.constants.console.removed);
            links.forEach(this.deleteOldNode.bind(this));
        }, 
        createResultsObserver: function(mainGoogleNode) {
            this.resultsObserver = new MutationObserver(() => {
                chrome.runtime.sendMessage({ event: this.constants.events.get_info }, info => {
                    var tId = info.tId;
                    var wId = info.wId;
                    this.currentUrl[wId] = this.currentUrl[wId] ? this.currentUrl[wId] : {};
                    this.remove(info);
                });
            });
            //this.resultsObserver.observe(mainGoogleNode, this.constants.observerConfig);
        }, 
        isSameUrl: function(currentUrl, info) {
            var tId = info.tId;
            var wId = info.wId;
            return this.currentUrl[wId][tId] === currentUrl;
        }, 
        addClientRectsOverlay: function(elt,sentimenti,sentimenti2) {
            /* Absolutely position a div over each client rect so that its border width
               is the same as the rectangle's width.
               Note: the overlays will be out of place if the user resizes or zooms. */
            var that = this;
            var rects = elt.getClientRects();
            for (var i = 0; i != rects.length; i++) {
            let original = elt;
              var rect = rects[i];
              var tableRectDiv = document.createElement('div');
            //   tableRectDiv.style.position = 'absolute';
              tableRectDiv.style.border = 'none';
              tableRectDiv.style.backgroundColor = '#f8f9fa';
              var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
              var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
              tableRectDiv.style.margin = '0px';
              if(elt.tagName=='DIV')
              {
                tableRectDiv.style.padding = '5px 25px';
                tableRectDiv.style.marginBlockEnd = "10px";
              }
              else if(elt.tagName=="G-INNER-CARD"){
                tableRectDiv.style.padding = '0px 25px';
                tableRectDiv.style.marginBlockEnd = "0px";
              }
              else if(elt.firstChild.childNodes[0].tagName=="A"){
                tableRectDiv.style.padding = '0px 25px';
                tableRectDiv.style.marginBlockEnd = "0px";
              }


              tableRectDiv.style.top = (rect.top + scrollTop) + 'px';
              tableRectDiv.style.left = (rect.left + scrollLeft) + 'px';
              // We want rect.width to be the border width, so content width is 2px less.
              tableRectDiv.style.width = (rect.width) + 'px'; //-2
              tableRectDiv.style.minHeight = (rect.height) + 'px'; // -2
              
              tableRectDiv.innerHTML=sentimenti.outerHTML;
              if(this.tagName=='G-INNER-CARD'){
                tableRectDiv.innerHTML=sentimenti2.outerHTML;
            }
            else if(elt.firstChild.childNodes[0].tagName=="A"){
                tableRectDiv.innerHTML=sentimenti2.outerHTML;
              }
              tableRectDiv.onclick = function(){
                that.ignoreList.push(original.id);
                this.replaceWith(original);
             
                // "run_at": "document_idle"
                // this.remove();
            }
            //   document.body.appendChild(tableRectDiv);
                return tableRectDiv
            }
        },
        getData: async function(text,overlay,score, type, href="") {
            const URL = 'https://services.iittp.ac.in/detoxbrowser/';
            // const URL = 'http://localhost:3000/';
            var b, textf, textc;
            textf = document.createElement('p');
            b = text.replace(/(?:https?|ftp?|www.):\/\/[\n\S]+/g, '');

            if(type==0){
                let check_ref = text.match(/(?:https?|ftp?|www.):\/\/[\n\S]+/);
                if(check_ref){
                    textc = parse(check_ref[0]);
                    textf.innerHTML= textc.domain; 
                }
            }
            else if(type==1||type==2){
                textf.innerHTML = `${parse(href).domain} \n`;
            }

            const data = JSON.stringify({"text":`${b}`})
            const keyb = [/JavaScript/i,
            /Python/i,
            /Java/i,
            /Rust/,
            /PHP/i,
            /C#/i,
            /C\+\+/i,
            /TypeScript/i,
            /Ruby/i,
            /Shell/i,
            / C /]
            $.ajax({
                url:URL,
                type:"POST",
                data:data,
                contentType:"application/json; charset=utf-8",
                dataType:"json",
                success: function(data){
                const joint = data.keywords.join(", ");
                for(const prop in keyb){
                if(joint.match(keyb[prop])){
                    overlay.click();
                    return;
                }
                }
                  const text = document.createElement('p');
                  text.innerHTML=`🤖[${score}] ${data.categoriser} \n`;
                  const text2 = document.createElement('p');
                  text2.className = "spoiler";
                  text2.innerHTML= joint;
                  overlay.appendChild(textf);
                  overlay.appendChild(text);
                  overlay.appendChild(text2);
                }
              })
        },
        deleteOldNode: async function(el) {
            var parent = el.closest(this.constants.queries.link_parent_node);
            if(!parent) parent = el.closest(this.constants.queries.link_story_node);
            if(!parent) parent = el.closest(this.constants.queries.link_video_node);
            if(!parent) parent = el.closest(this.constants.queries.link_news_node);
            if(!parent) return console.log(this.constants.console.needs_to_be_updated);
            // console.log(parent.getBoundingClientRect());
            // this.addClientRectsOverlay(parent);
            // const original = parent;
            if(this.ignoreList.includes(parent.id)) return;
            // "js": [ "scripts/jquery-3.6.0.min.js", "scripts/remover.js" ],
            // console.log(jQuery(parent).text());
            let check_text = getText(parent);
            const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
            let href_text = parent.innerHTML.match(linkRx)[2]||"";
            const re = /(definition|dictionary|wiki|britannica)/i
            if(((check_text || '').match(re) || []).length>0){
                return;
            }
            options = await updateOptions();
            if(blacklist && blurblackOption)
            if (new RegExp(blacklist.join("|"),'i').test(check_text)) {
                // At least one match
                parent.style.display = 'none';
                return;
            }
            let score = Number((sentiment.analyze(check_text,options).comparative).toFixed(1));
            let img = '';
            switch(true){
                case score < -0.5:
                    img = chrome.runtime.getURL('images/emote/np.png');
                    break;
                case score >= -0.5 && score < 0:
                    img = chrome.runtime.getURL('images/emote/n0.5.png');
                    break;
                case score <= 0.5 && score > 0:
                    img = chrome.runtime.getURL('images/emote/p0.5.png');
                    break;
                case score > 0.5:
                    img = chrome.runtime.getURL('images/emote/pp.png');
                    break;
                default:
                    img = chrome.runtime.getURL('images/emote/0.png');                              
            }
            let sentimenti = this.createThumbnail(img);
            let sentimenti2 = this.createThumbnail2(img);
            var overlay;
            if(score<0){
                overlay = this.addClientRectsOverlay(parent,sentimenti,sentimenti2);
                if(!overlay){
                    // console.log(parent);
                    return;
                }
                if(parent.tagName=='DIV'){
                    this.getData(check_text,overlay,score, 0);
                }
                else if(parent.tagName=='G-INNER-CARD'){
                    this.getData(check_text,overlay,score, 1, href_text)
                }
                else{
                    this.getData(check_text,overlay,score, 1, href_text) 
                }
                parent.replaceWith(overlay)
            }
            if(parent.tagName=='DIV'){
                parent.insertBefore(sentimenti,parent.firstChild);
            }
            else if(parent.tagName=='G-INNER-CARD'){
                parent.insertBefore(sentimenti2,parent.firstChild);
            }
            else if(elt.firstChild.childNodes[0].tagName=="A"){
                parent.insertBefore(sentimenti2,parent.firstChild);
            }

        },
        createThumbnail: function(href) {
            var thumb;					
            thumb = document.createElement("img");
			thumb.setAttribute("loading", "lazy");	
            thumb.setAttribute("align", "left");	
            thumb.setAttribute("src", href);
            thumb.style.width = "32px";
            thumb.style.height = "32px";
			thumb.setAttribute("width", 32);
			thumb.setAttribute("height", 32);
            thumb.style.backgroundPosition = "center";
            thumb.style.backgroundRepeat = "no-repeat";
            thumb.style.border = "none";
            thumb.style.position = "absolute";
            thumb.style.left = "-64px";

            return thumb;
        },
        createThumbnail2: function(href) {
            var thumb;					
            thumb = document.createElement("img");
			thumb.setAttribute("loading", "lazy");	
            thumb.setAttribute("align", "left");	
            thumb.setAttribute("src", href);
            thumb.style.width = "32px";
            thumb.style.height = "32px";
			thumb.setAttribute("width", 32);
			thumb.setAttribute("height", 32);
            thumb.style.backgroundPosition = "center";
            thumb.style.backgroundRepeat = "no-repeat";
            thumb.style.border = "none";

            return thumb;
        },
    };

    /* may need to tune this timeout in the future
    otherwise we get progressive removals instead of all them toghether */
    setTimeout(() => {
        Detoxer.init();
    }, 250)

})();
