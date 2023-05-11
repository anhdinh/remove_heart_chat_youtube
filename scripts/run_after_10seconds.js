
jQuery(function(){
  runIfdocumentIsReady(); 
});

function runIfdocumentIsReady(){ 
  setInterval(function(){
    removeBannerChatNimo();
    removeHeartFromYoutube()
  },3000)
}

function removeHeartFromYoutube(){
  const chatframe = document.getElementById('chatframe');
  if (chatframe) {
    removeHeartFromChatFrame(chatframe);
  }
}

function removeHeartFromChatFrame(chatframe){
  var reaction_control_panel  = chatframe.contentWindow.document.getElementById('reaction-control-panel');
  if(reaction_control_panel) {
    reaction_control_panel.remove()  
  }
}

function removeBannerChatNimo(){
  if(window.location.host==='www.nimo.tv'){
    let iframe_pannel = document.getElementsByClassName('nimo-iframe__wrap movePannel react-draggable')[0];
    if(iframe_pannel){
      iframe_pannel.remove()
    }
  }
}
