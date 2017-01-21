// ==UserScript==
// @name         GitHub Projects fullscreen
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Makes projects open fullscreen by default.
// @author       Paul Schaefer
// @match        https://github.com/*/*/projects
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	window.onload = function() {
		// target the projects and their links
		var projects = document.getElementById('projects-results'),
			links = projects.getElementsByClassName('link-gray-dark');

		// loop through them, appending fullscreen
		for (var i = 0; i < links.length; i++) {
			links[i].href += '?fullscreen=true';
		}
	};
})();
