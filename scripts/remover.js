function getText(domElement) {
    var clean = ["Featured snippet from the web ","Web results ","...","People also search for"]
    var root = domElement;
    var text = [];
  
    function traverseTree(root) {
      Array.prototype.forEach.call(root.childNodes, function(child) {
        if (child.nodeType === 3) {
          var str = child.nodeValue.trim();
          if (str.length > 0) {
            text.push(str);
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
                link_parent_node: '#rso div.g', 
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
            return document.querySelectorAll(this.constants.queries.result_links);
        }, 
        remove: function(info) {
            var tId = info.tId;
            var wId = info.wId;
            // ignoring dropdown items and huge card on the right
            var links = Array.from(this.getAllLinks()).filter(function (link) {
                var isAccordionItem = Boolean(link.closest('g-accordion-expander'))
                var isHugeCardOnTheRight = Boolean(link.closest('#wp-tabs-container'))
                var isFeatured = Boolean(link.closest(".xpdopen"))
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
            console.info(count + ' ' + this.constants.console.removed);
            links.forEach(this.deleteOldGrandpaNode.bind(this));
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
        addClientRectsOverlay: function(elt,sentimenti) {
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
              tableRectDiv.style.padding = '5px 25px';
              tableRectDiv.style.top = (rect.top + scrollTop) + 'px';
              tableRectDiv.style.left = (rect.left + scrollLeft) + 'px';
              // We want rect.width to be the border width, so content width is 2px less.
              tableRectDiv.style.width = (rect.width - 2) + 'px';
              tableRectDiv.style.height = (rect.height - 2) + 'px';
              tableRectDiv.innerHTML=sentimenti.outerHTML;
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
        getData: async function(text,overlay,score) {
            const URL = 'https://text-check.herokuapp.com/';
            // const URL = 'http://localhost:3000/';
            var b = text.replace(/(?:https?|ftp?|www.):\/\/[\n\S]+/g, '');
            const data = JSON.stringify({"text":`${b}`})
            $.ajax({
                url:URL,
                type:"POST",
                data:data,
                contentType:"application/json; charset=utf-8",
                dataType:"json",
                success: function(data){
                  const text = document.createElement('p');
                  text.innerHTML=`🤖[${score}] ${data.categoriser} \n`;
                  const text2 = document.createElement('p')
                  text2.className = "spoiler";
                  text2.innerHTML= data.keywords.join(", ");
                  overlay.appendChild(text);
                  overlay.appendChild(text2);
                }
              })
        },
        deleteOldGrandpaNode: async function(el) {
            var parent = el.closest(this.constants.queries.link_parent_node);
            if(!parent) return console.log(this.constants.console.needs_to_be_updated);
            // console.log(parent.getBoundingClientRect());
            // this.addClientRectsOverlay(parent);
            // const original = parent;
            if(this.ignoreList.includes(parent.id)) return;

            // "js": [ "scripts/jquery-3.6.0.min.js", "scripts/remover.js" ],
            // console.log(jQuery(parent).text());
            let check_text = getText(parent);
            let score = Number((sentiment.analyze(check_text).comparative).toFixed(1));
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
            var overlay;
            if(score<0){
                overlay = this.addClientRectsOverlay(parent,sentimenti);
                this.getData(check_text,overlay,score);
                parent.replaceWith(overlay)
            }
            parent.insertBefore(sentimenti,parent.firstChild);
            // parent.style.display = 'none';

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
    };

    /* may need to tune this timeout in the future
    otherwise we get progressive removals instead of all them toghether */
    setTimeout(() => {
        Detoxer.init();
    }, 250)

})();
