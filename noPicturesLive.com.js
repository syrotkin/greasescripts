// ==UserScript==
// @name        NoPicturesOnLiveMsft
// @namespace   elca.ch.osy
// @description No Pictures on Live.com
// @include     https://login.live.com/*
// @include     http://login.live.com/*
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener('load', function() {
    // after loading
    var aaa = document.getElementById("productTD");
    if (aaa) { 
       //console.log("aaa exists");
       //console.log(aaa.style);
       aaa.style.display = "none";
       //console.log("Now: display: " + aaa.style.display);
    }
    else {
       console.log("no aaa");
    }
}, false);


//document.getElementById("mainTD").style.backgroundColor = "red";
//document.getElementById("mainTD").style.display = "none";
//document.getElementById("productTD").style.display = "none";
//document.getElementById("brandModeTD").style.display = "none";

//document.getElementById("hot-network-questions").style.display = "none";