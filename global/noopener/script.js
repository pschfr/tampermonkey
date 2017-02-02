// ==UserScript==
// @name         noopener
// @namespace    https://github.com/pschfr/tampermonkey/tree/master/global/noopener
// @version      1.0.1
// @description  This script appends `rel="noopener noreferrer"` to every link that has `target="_blank"`, as it prevents a major security risk.
// @author       Paul Schaefer
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		var allLinks = document.getElementsByTagName('a');

		for (var i in allLinks) {
			if (allLinks[i].target == '_blank') {
				allLinks[i].rel += ' noopener noreferrer';
			}
		}
	};
})();
