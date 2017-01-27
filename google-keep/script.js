// ==UserScript==
// @name         Google Keep Sidebar Closer
// @namespace    https://github.com/pschfr/stylish/tree/master/google-keep
// @version      1.0.1
// @description  Closes the sidebar on page load
// @author       Paul Schaefer
// @match        keep.google.com/*
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		document.getElementsByClassName('gb_1b')[0].click();
	};
})();
