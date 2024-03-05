// Find <li> elements
var elements = document.getElementsByTagName('li');

// If 1 or more are found
if (elements.length > 0) {
  // Select the first one using array syntax
  var el = elements[3];
  var el2 = elements[2];

  // Change the value of the class attribute
  el.className = 'cool';
  el2.className = 'cool';
}