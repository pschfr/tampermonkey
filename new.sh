#!/bin/bash

# Introduction and new folder name
echo -e "\e[34m\e[1mNew Tampermonkey Script v1.0.1\e[0m"
echo -ne "\nEnter folder name: "
read -e NAME
echo -ne "\nEnter website URL: "
read -e URL
echo -ne "\nEnter description: "
read -e DESC

# Move to correct location, create and enter folder
cd "/home/paul/Dropbox/Work/tampermonkey/"
mkdir "$NAME"
cd "$NAME"

# Generate readme with content
cat <<EOF > readme.md
# [$NAME]($URL)
$DESC
EOF

# Generate JS file
cat <<EOF > script.js
// ==UserScript==
// @name         $NAME
// @namespace    https://github.com/pschfr/tampermonkey/tree/master/$NAME
// @version      1.0
// @description  $DESC
// @author       Paul Schaefer
// @match        $URL
// @grant        none
// ==/UserScript==

(function() {
	window.onload = function() {
		// Your code here...
	};
})();
EOF

# Finished!
echo -e "\n$NAME has been created!\n\nOpen your text editor and get to work."
