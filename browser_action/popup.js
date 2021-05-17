function SaveWordsP() {
    var polarlist = $('#polarlist').val();
    chrome.storage.sync.set({
        "polarlist": polarlist
    });
    document.getElementById('save-btnp').setAttribute('style', 'display:none;');
}

function SaveWords() {
    var blacklist = $('#blacklist').val();
    chrome.storage.sync.set({
        "blacklist": blacklist
    });
    document.getElementById('save-btn').setAttribute('style', 'display:none;');
}

function loadData() {
    chrome.storage.sync.get(['blacklist','polarlist'], function(result) {
        if (result.blacklist != '        ' || undefined) $('#blacklist').val(result.blacklist);
        else $('#blacklist').value = '';
        if (result.polarlist != '        ' || undefined) $('#polarlist').val(result.polarlist);
        else $('#polarlist').value = '';
        // 'enabled', 'testingMode',
        // $('#toggle').prop('checked', result.enabled);
        // onOff();
    });
}

// function onOff() {
//     if ($('#toggle').prop('checked')) {
//         $('#onoff').css({
//                 'color': 'black'
//             })
//             .text('On');
//     } else {
//         $('#onoff').css({
//                 "color": "red"
//             })
//             .text('Off');
//     }
// }


// function saveEnabled() {
//     var enabled = $('#toggle').prop('checked');
//     chrome.storage.sync.set({
//         "enabled": enabled
//     });
//     onOff();
// }

function Unsaved() {
    chrome.storage.sync.get('blacklist', function(result) {
        if ($('#blacklist').val() != result.blacklist) {
            SaveWords();
            document.getElementById('save-btn').setAttribute('style', 'display:inline-block;');
        }
        else {
                   document.getElementById('save-btn').setAttribute('style', 'display:none;');
        }
    });
}

function UnsavedP() {
    $(this).val($(this).val().replace(/ /g, ""));
    chrome.storage.sync.get('polarlist', function(result) {
        if ($('#polarlist').val() != result.polarlist) {
            SaveWordsP();
            document.getElementById('save-btnp').setAttribute('style', 'display:inline-block;');
        }
        else {
                   document.getElementById('save-btnp').setAttribute('style', 'display:none;');
        }
    });
}

function showExamples() {
    if (document.getElementById('help').innerText == 'About') {
        $('#examples').fadeIn(500);
        $('#help').text('Hide');
        $('body').animate({
                scrollTop: $(document).height() - $(window).height()
            },
            1400,
            "swing"
        );
    } else {
        $('#examples').slideUp(500);
        $('#help').text('About');
    }
}

function showOptions() {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else window.open(chrome.runtime.getURL('options.html'));
}

$(document).ready(function() {
    loadData();
    $('#polarlist').bind('input', UnsavedP);
    $('#blacklist').bind('input', Unsaved);
    $('#save-btn').bind('click', SaveWords);
    $('#save-btnp').bind('click', SaveWordsP);
    // $('#toggle').bind('change', saveEnabled);
    $('#help').bind('click', showExamples);
    $('#optionsIcon').bind('click', showOptions);
    // Animations
    $('#logo').slideDown(250);
    $('#logoLine').fadeIn(2500);
    $('.wordLine').fadeIn(1000);
    $('#polarlist').fadeIn(1000);
    $('#blacklist').fadeIn(1000);
    // $('#onoff').fadeIn(1200);
    $('#help').fadeIn(2000);
});