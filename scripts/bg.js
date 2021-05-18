(function() {

    var tabsManager = {
        imagePaths: {
            active: {
                128: "images/a128.png",
                16: "images/a16.png",
                32:"images/a32.png",
                48: "images/a48.png"
            }, 
            inactive: {
                16: "images/icon16.png",
                32: "images/icon32.png",
                48: "images/icon48.png",
                128: "images/icon128.png"
            }
        }, 
        setTabCount: function(wId, tId, count) {
            this[wId] = this[wId] ? this[wId] : {};
            this[wId][tId] = count || '';
        }, 
        getTabCount: function(wId, tId) {
            if(!this[wId]) return '';
            return this[wId][tId] || '';
        }, 
        clearTab: function(wId, tId) {
            if(!this[wId]) return;
            delete this[wId][tId];
        }, 
        setBadge(wId, tId, count) {
            var count = count || this.getTabCount(wId, tId);
            this.setTabCount(wId, tId, count);
            chrome.browserAction.setBadgeText({ text: count });
        }
    };

    chrome.runtime.onInstalled.addListener(function() {
        chrome.storage.sync.get([ 'blurOption', 'abusingOption', 'hoveringOption'], function(r){
    
            let defaults = {
                'blurOption': true,
                'hoveringOption': true,
                'abusingOption': true,
            },
            current = r,
            newSettings = Object.assign(defaults,current);
    
            chrome.storage.sync.set(
                newSettings
            );
        });
    });

    chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
        var tId = sender.tab.id;
        var wId = sender.tab.windowId;
        if(msg.event === 'get_tId_and_wId') {
            callback({ tId: tId, wId: tId });
        } else {
            chrome.browserAction.setIcon({ path: tabsManager.imagePaths[msg.event], tabId: tId });
            if(msg.event === 'inactive') {
                // if(msg.url) console.log('Avoided execution in: ' + msg.url);
                chrome.browserAction.setBadgeText({ text: '' });
            } else if(msg.event === 'active') {
                tabsManager.setBadge(wId, tId, msg.count.toString());
            }
        }
    });

    chrome.tabs.onActivated.addListener(function(activeInfo) {
        var tId = activeInfo.tabId;
        var wId = activeInfo.windowId;
        tabsManager.setBadge(wId, tId);
    });

    chrome.tabs.onRemoved.addListener(function(removedInfo) {
        var tId = removedInfo.id;
        var wId = removedInfo.windowId;
        tabsManager.clearTab(wId, tId);
    })

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.url) {
            // console.log('Tab %d got new URL: %s', tabId, changeInfo.url);
            chrome.tabs.sendMessage(tabId, {
                greeting: 'urlChange'
            });
        }
    });

})();
