var elemTags = 'em, h1, h2, h3, h4, h5, h6, span, b, a, p, li, article, strong, blockquote, div, th, td, img';
// Max children elements allowed (default presets)
var cDefault = parseInt($('body').find('*').length * 0.006)||100;
if (cDefault < 25) cDefault = 25;
function hideElem(elem, word) {
    chrome.storage.sync.get('blurOption', function(result) {
        if (result.blurOption) {
            elem.css({
                'filter': 'blur(10px)'
            });
            var timeOut;
            chrome.storage.sync.get('hoveringOption', function(result) {
                if (result.hoveringOption) {
                    // If "Reveal on hover" -setting is checked, remove blur on mouse hover
                    elem.hover(function() {
                        timeOut = setTimeout(function() {
                            elem.css({
                                'filter': 'blur(0px)'
                            });
                        }, 500)
                    }, function() {
                        // Blur element again on mouseleave
                        clearTimeout(timeOut);
                        elem.css({
                            'filter': 'blur(10px)'
                        });
                    });
                } else {
                    // If "hover to reveal" -option is unchecked, show which keywords were found on the element onhover
                    if (elem.attr('title') == undefined) elem.attr('title', 'Keywords found: ' + word);
                    else if (!elem.attr('title').includes('Keywords found:')) elem.attr('title', 'Keyword found: ' + word);
                    else elem.attr('title', elem.attr('title') + ', ' + word);
                }
            });
        } else {
            elem.slideUp("slow");
        }
    });



}
function checkAllElems(wordlist, elem) {
    var superSet = new Set();
    var maxChildren = cDefault;
    var elemType;
    if (elem != elemTags) {
        elemType = $(elem).parent().parent(elemTags);
    } else elemType = $(elem);

    elemType.each(function(i) {
        if ($(this).find('*').length < maxChildren) { // How many child elements are allowed
            var elemExist = setInterval(function() {
                if ($(this) != null) clearInterval(elemExist);
            }, 100);
            for (i in wordlist) {
                if (wordlist[i] != '' && wordlist[i].slice(0, 2) != '//') {

                    var word = wordlist[i].toString();
                    if (new RegExp(word, 'gi')
                        .test($(this).text()) && $(this).css('display') != 'none') {
                        hideElem($(this), word);
                        superSet.add(word);
                    }
                }
            }
        }
    });

    if(superSet.size>0){
        if(!$('#blacklist_blocker').length){
            $("body").append(
                `<div id="blacklist_blocker" class="modal" style="opacity: 1; display: none;">
                <p>Are you sure you want to continue ?? This page discusses about blacklisted topics which are : <b>`+[...superSet].join(', ')+`</b></p>
                </div>`

            );
        }
        $('#blacklist_blocker').modal({
            fadeDuration: 100
        });
    }
}
function getWordlist(elem) {
    var wordlist;
    chrome.storage.sync.get(['blacklist'], function(result) {
        wordlist = result.blacklist.toLowerCase().split('\n');
        checkAllElems(wordlist, elem);
    });
}
function runningStatus(elem) {
            var found = false;
            if($('#blacklist_blocker').length){
            }
            else{
                chrome.storage.sync.get(['urls'], function(options) {
                    if (options.urls != undefined) {
                        var urls = options.urls;
                        urls = urls.split('\n');
                            for (url in urls) {
                                if (urls[url].trim() !== '') {
                                    if(window.location.href.indexOf("google.") > -1) found = true;
                                    else if (window.location.href.includes(urls[url].trim())) found = true;
                                    // console.log(urls[url].trim());
                                }
                                if (found) break;
                            }
                            if (!found) {
                                getWordlist(elem);
                            } // else console.log('Disabled url detected: ' + urls[url]);
                    } else getWordlist(elem);
                });
            }


}
function Observer() {
    var observer = new MutationObserver(function(mutation) {
        for (var a = 0; a < mutation.length; a++) {
            var addedNode = mutation[a].addedNodes;
            for (var b = 0; b < addedNode.length; b++) {
                if (addedNode[b].nodeType != 1) continue;
                var node = addedNode[b];
                if (node.children.length) {
                    var nodes = node.getElementsByTagName('div');
                    for (var c = 0; c < nodes.length; c++) {
                        runningStatus(nodes[c]);
                    }
                }
            }
        }
    });

    // Mutation observer conf
    var config = {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
    };

    // Start observing
    observer.observe(window.document, config);
}
$(window).ready(function() {
    runningStatus(elemTags);
    Observer();
});
// Check all elements if url has been changed
// For websites that load new entire pages with ajax (like youtube.com)
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == 'urlChange') {
        setTimeout(function() {
            runningStatus(elemTags);
        }, 500);
    }
    sendResponse('Message received');
});