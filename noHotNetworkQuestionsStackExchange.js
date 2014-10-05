// ==UserScript==
// @name        noHotNetworkQuestions
// @namespace   elca.ch.osy
// @description No hot network questions
// @include     http://stackoverflow.com/*
// @include     http://*.stackexchange.com/*
// @version     1
// @grant       none
// ==/UserScript==
document.getElementById("hot-network-questions").style.display = "none";