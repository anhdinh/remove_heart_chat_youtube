
jQuery(function(){
  runIfdocumentIsReady(); 
});

function runIfdocumentIsReady(){ 
  setInterval(function(){
    removeReactPannelOnChatNimo();
    removeHeartIconOnChatSectionYoutube()
  },3000)
}

function removeHeartIconOnChatSectionYoutube(){
  const chatframe = document.getElementById('chatframe');
  if (chatframe) {
    removeHeartIcon(chatframe);
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
    if(reactPannel){
      reactPannel.remove()
    }
  }
}
