// ==UserScript==
// @name         berkeley-mews
// @namespace    https://github.com/pschfr/tampermonkey/tree/master/berkeley-mews
// @version      1.0
// @description  Simple keyboard nav for prev/next functionality
// @author       Paul Schaefer
// @match        http://www.berkeleymews.com/*
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		document.addEventListener('keydown', (event) => {
			if (event.key == 'ArrowRight') {
				if (document.getElementsByClassName('navi-next')[0].tagName == 'A') {
					window.location = document.getElementsByClassName('navi-next')[0].href;
				}
			} else if (event.key == 'ArrowLeft') {
				if (document.getElementsByClassName('navi-prev')[0].tagName == 'A') {
					window.location = document.getElementsByClassName('navi-prev')[0].href;
				}
			}
		});
	};
})();
