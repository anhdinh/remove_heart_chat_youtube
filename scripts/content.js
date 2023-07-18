
jQuery(function(){
  runIfdocumentIsReady(); 
});

function runIfdocumentIsReady(){ 
  setInterval(function(){
    removeReactPannelOnChatNimo();
    removeHeartIconOnChatYoutube()
    removeBrandLogoInScreenYoutube();
  },3000)
}

function removeHeartIconOnChatYoutube(){
  const chatframe = document.getElementById('chatframe');
  if (chatframe) {
    removeHeartIcon(chatframe);
  }
}

function removeBrandLogoInScreenYoutube(){
  const brandLogo =  document.getElementsByClassName("branding-img-container ytp-button")[0].remove()
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


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(JSON.parse(request.data).show_nav){
    document.getElementById('header').style.display='block';
  }else{
    document.getElementById('header').style.display='none';
  }
  sendResponse({ fromcontent: "This message is from content.js" });
});