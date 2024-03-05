// Create a new element and store it in a variable.
var newEl = document.createElement('li');
var newE2 = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');
var newText2 = document.createTextNode('Lim NgauvHeng');

// Attach the new text node to the new element.
newEl.appendChild(newText);
newE2.appendChild(newText2);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);
position.appendChild(newE2);