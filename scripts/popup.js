


function addClickForButton(button_id,data){
    const btn = document.getElementById(button_id);
    if (btn) {
        btn.onclick = function() {
            callFuntionOnContentScript(data);
        };
    }
}


function callFuntionOnContentScript(data){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                data:`${data}`
            },
            function(response) {
                window.close();
            }
        );

    });
}

addClickForButton('show_nav_btn',JSON.stringify({'show_nav':true}));
addClickForButton('hide_nav_btn',JSON.stringify({'show_nav':false}));
