// ==UserScript==
// @name        no_reg_overlay_economist
// @namespace   elca.ch.osy
// @description No overlay on economist
// @include     http://www.economist.com/*
// @include     http://economist.com/*
// @version     1
// @grant       none
// ==/UserScript==

function closeAd() {
  var simplemodalOverlay = document.getElementById("simplemodal-overlay");
    if (simplemodalOverlay) { 
       console.log("simplemodalOverlay exists");
       simplemodalOverlay.style.display = "none";
      var regOverlay = document.getElementById("reg-overlay");
      if(regOverlay) {
        regOverlay.style.display = "none";
      }
      var simpleModalContainer = document.getElementById("simplemodal-container");
      if (simpleModalContainer) {
        simpleModalContainer.style.display = "none";
      }
       //console.log("Now: display: " + aaa.style.display);
    }
    else {
       console.log("no simplemodalOverlay");
    }
};

//closeAd(); // too early, need to call the function on window.load

window.addEventListener('load', closeAd, false);


