// ==UserScript==
// @name         Google Keep Sidebar Closer
// @namespace    https://github.com/pschfr/stylish/tree/master/google-keep
// @version      1.0
// @description  Closes the sidebar on page load
// @author       Paul Schaefer
// @match        keep.google.com/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	window.onload = function() {
		document.getElementsByClassName('gb_0b')[0].click();
	};
})();
