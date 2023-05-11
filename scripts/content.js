
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//

//   setTimeout(() => {
//     const chatframe = document.getElementById('chatframe');
//      if (chatframe) {
//         var reaction_control_panel  = chatframe.contentWindow.document.getElementById('reaction-control-panel');
//         reaction_control_panel.remove();   
//      }
// }, 10000);



// document.addEventListener("DOMContentLoaded", function() {
//     const chatframe = document.getElementById('chatframe');
//  if (chatframe) {
//     $document =  chatframe.contentWindow.document;
//     $document.addEventListener("DOMContentLoaded", function() {
//         var reaction_control_panel  = $document.getElementById('reaction-control-panel');
//         reaction_control_panel.remove();    
//     });
     
//  }

// });
whiteout = () => {
     const chatframe = document.getElementById('chatframe');
     if (chatframe) {
        var reaction_control_panel  = chatframe.contentWindow.document.getElementById('reaction-control-panel');
        if(reaction_control_panel) reaction_control_panel.remove();   
      }

}

whiteout()

