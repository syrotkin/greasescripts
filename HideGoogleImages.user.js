// ==UserScript==
// @name        HideGoogleImages
// @namespace   elca.ch.osy
// @description hide images in google
// @include     https://www.google.ch/search*
// @version     1
// @grant       none
// ==/UserScript==

var imgs = document.getElementsByTagName("img");
var len = imgs.length;
for (var i = 0; i < len; i++) {
  imgs[i].style.display = "none";
}

console.log("I am here");

var bigImages = document.getElementById("imagebox_bigimages");
if (bigImages) {
  bigImages.style.display = "none";
}

console.log("Booo");