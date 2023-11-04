var show_dislike_youtube = false;
jQuery(function(){
  runIfdocumentIsReady(); 
});
var count_number = 1;

function runIfdocumentIsReady(){ 
  setInterval(function(){
    count_number = count_number+1;
    if(count_number%2===0){
      removeOverlayDivOnVideoScreenOnStudyphim();
      removeAlertWarningAboutAdblock4CambridgeDic();
    }
    if(count_number===10){
      removeHeartIconOnChatYoutube()
      removeBrandLogoInScreenYoutube();
      showDislikeOnYoutube();
    }
   
  },1000)
}

function removeHeartIconOnChatYoutube(){
  const chatframe = document.getElementById('chatframe');
  if (chatframe) {
    removeHeartIcon(chatframe);
  }
}

function removeBrandLogoInScreenYoutube(){
  const brandLogo =  document.getElementsByClassName("branding-img-container ytp-button")[0];
  if(brandLogo){
    brandLogo.remove()
  }
}

function removeHeartIcon(chatframe){
  var heartIcon  = chatframe.contentWindow.document.getElementById('reaction-control-panel');
  if(heartIcon) {
    heartIcon.remove()  
  }
}

function removeReactPannelOnChatNimo(){
  if(window.location.host==='www.nimo.tv'){
    let reactPannel = document.getElementsByClassName('nimo-iframe__wrap movePannel react-draggable')[0];
    let rankDonors =  document.getElementsByClassName('nimo-room__rank n-as-rel bc-brighter')[0];
    let nimoRm = document.getElementsByClassName('nimo-rm')[0];
    let gift = document.getElementsByClassName('nimo-room__gift-shop')[0]
    let sideBar = document.getElementById('side-bar');

    if(reactPannel){
      reactPannel.remove()
    }

    if(rankDonors){
      rankDonors.remove();
    }

    if(sideBar){
      sideBar.remove();
    }

    if(nimoRm){
      nimoRm.remove();
    }
    if(gift){
      gift.remove();
    }
  }
}


function showDislikeOnYoutube(){
  if(show_dislike_youtube){
    const urlParams = new URLSearchParams(window.location.search);
    const video_id  = urlParams.get("v");
    jQuery.get("https://returnyoutubedislikeapi.com/votes?videoId="+video_id, function(data, status){
      const htmlDislikenumber = "<div id='dislike_number'>"+data.dislikes+"</div>"
      if(jQuery("#dislike_number").length == 0){
        jQuery("#segmented-dislike-button .yt-spec-button-shape-next__icon").after(htmlDislikenumber);
      }else{
        jQuery("#dislike_number").text(data.dislikes);
      }  
    });
  }else{
    if(jQuery("#dislike_number").length != 0){
      jQuery("#dislike_number").remove();
    }
  }
}

function removeOverlayDivOnVideoScreenOnStudyphim(){
  if(window.location.host==='www.studyphim.vn'){
    let overlayDiv = document.querySelector(".overlay");
    if(overlayDiv){
      overlayDiv.remove();
      let pausedButtom =  document.querySelector(".state-paused");
      if (pausedButtom) {
        pausedButtom.click();
      }
    }
  }
}

function removeAlertWarningAboutAdblock4CambridgeDic(){
  if(window.location.host==='dictionary.cambridge.org'){
    let overlayDiv = document.querySelector(".fc-dialog-overlay");
    if(overlayDiv){
      overlayDiv.remove();
      let closeButtom =  document.querySelector(".fc-close-icon");
      if (closeButtom) {
        closeButtom.click();
      }
    }
  }
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("received the message + "+ request.data);
  if(JSON.parse(request.data).show_nav){
    document.getElementById('header').style.display='block';
  }else if(JSON.parse(request.data).toggle_dislike_youtube){
    show_dislike_youtube = !show_dislike_youtube;
  }else{
    document.getElementById('header').style.display='none';
  }
  sendResponse({ fromcontent: "This message is from content.js" });
});