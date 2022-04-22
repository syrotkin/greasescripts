// ==UserScript==
// @name stackoverflow-hide-hot-network-questions
// @namespace http://www.elca.ch/osy
// @version      0.1
// @description Hide Hot Network Questions in Stackoverflow.com
// @match https://stackoverflow.com/*
// @match https://*.stackexchange.com/*
// @match https://superuser.com/*
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.16.6160&ext=fire&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // this function courtesy of:
    // http://stackoverflow.com/questions/4275071/javascript-getelementbyid-wildcard
    function getElementsStartsWithId( id ) {
        var children = document.body.getElementsByTagName('*');
        var elements = [], child;
        for (var i = 0, length = children.length; i < length; i++) {
            child = children[i];
            if (child.id.substr(0, id.length) == id) {
                elements.push(child);
            }
        }
        return elements;
    }

    document.getElementById("hot-network-questions").style.display = "none";
    document.getElementById("hireme").style.display = "none";

    var adzerkElements = getElementsStartsWithId("adzerk");
    if (adzerkElements) {
        console.log("adzerk: " + adzerkElements.length);
    }
    else {
        console.log("can't find adzerk");
    }
    for (var el in adzerkElements) {
        el.style.display = "none";
    }

})();
