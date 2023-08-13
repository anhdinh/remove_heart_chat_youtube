


function addClickForButton(button_id,data){
    console.log("-------1-----");
    const btn = document.getElementById(button_id);
    if (btn) {
        btn.onclick = function() {
            callFuntionOnContentScript(data);
        };
    }
}


function callFuntionOnContentScript(data){
    console.log("data "+data);
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
addClickForButton('toggle_dislike_youtube_btn',JSON.stringify({'toggle_dislike_youtube':true}));



