// ==UserScript==
// @name         Wikipedia External Links in New Tab
// @namespace    https://github.com/pschfr/tampermonkey/tree/master/wikipedia/
// @version      1.0
// @description  Makes external links on Wikipedia open in a new tab
// @author       Paul Schaefer
// @match        *://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		var allLinks = document.getElementsByTagName('a');

		for (var i in allLinks) {
			if (allLinks[i].classList.contains('external')) {
				allLinks[i].target = '_blank';
				allLinks[i].rel += ' noopener noreferrer';
			}
		}
	};
})();
