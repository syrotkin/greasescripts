// ==UserScript==
// @name         no_previews_youtube
// @namespace    http://tampermonkey.net/
// @version      2025-05-09
// @description  Hide other video thumbnails in Youtube
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {

    function hideSecondary() {
       const secondary = document.getElementById("secondary");
       if (secondary) {
           console.log("secondary exists");
           secondary.style.display = "none";
       }
       else {
           console.log("no secondary found");
       }

       const related = document.getElementById("#related");
       if (related) {
           console.log("related exists");
           related.style.display = "none";
       }
       else {
           console.log("no related found");
       }
   };

    //hideSecondary(); // too early, need to call the function on window.load

    window.addEventListener('load', hideSecondary, false);
})();