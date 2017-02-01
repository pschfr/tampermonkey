// ==UserScript==
// @name         Google Keep Sidebar Closer
// @namespace    https://github.com/pschfr/stylish/tree/master/google-keep
// @version      1.0.3
// @description  Closes the sidebar on page load
// @author       Paul Schaefer
// @match        keep.google.com/*
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		document.querySelectorAll('[aria-label="Main menu"]')[0].click();
	};
})();
