// ==UserScript==
// @name         *.github.io linker
// @namespace    https://github.com/pschfr/tampermonkey/tree/master/github/
// @version      1.0
// @description  Links *.github.io repositories to their GitHub Pages site
// @author       Paul Schaefer
// @match        github.com/*/*.github.io
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		var	container = document.getElementsByClassName('repohead-details-container')[0],
			header = container.getElementsByTagName('h1')[0],
			strong = header.getElementsByTagName('strong')[0],
			name = strong.getElementsByTagName('a')[0],
			link = document.createElement('a'),
			text = document.createTextNode(' site');

		link.appendChild(text);
		link.href = 'http://' + name.innerHTML;
		link.target = '_blank';
		strong.appendChild(link);
	};
})();
