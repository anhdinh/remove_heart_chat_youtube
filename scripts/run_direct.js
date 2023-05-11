
callWhiteOut = (tab) => {
    const {id, url} = tab;
    if (url.indexOf('https://www.youtube.com/') > -1){
      chrome.scripting.executeScript(
        {
          target: {tabId: id, allFrames: true},
          files: ['scripts/content.js']
        }
      )
      console.log(`Loading: ${url}`); 
    }
  }
  
  getCurrentTab = async () => {
    let queryOptions = { active: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
  
  
  getCurrentTab().then((tab)=>{
    callWhiteOut(tab)
  })
