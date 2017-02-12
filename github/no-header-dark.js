// ==UserScript==
// @name         Disable Dark Header
// @namespace    https://github.com/pschfr/tampermonkey/tree/master/github
// @version      1.0
// @description  Removes the header-dark class from GitHub's header
// @author       Paul Schaefer
// @match        github.com/*
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		document.getElementsByClassName('header')[0].classList.remove('header-dark');
	};
})();
