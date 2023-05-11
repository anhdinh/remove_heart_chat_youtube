
jQuery(function(){
  runIfdocumentIsReady();
});


function runIfdocumentIsReady(){ 
  setInterval(function(){
    const chatframe = document.getElementById('chatframe');
    if (chatframe) {
      removeHeartFromChatFrame(chatframe);
    }
  },3000)
}


function removeHeartFromChatFrame(chatframe){
  var reaction_control_panel  = chatframe.contentWindow.document.getElementById('reaction-control-panel');
  if(reaction_control_panel) {
    reaction_control_panel.remove()  
  }
}
