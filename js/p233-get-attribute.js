// Get first list item 
var firstItem = document.getElementById('one');
var fourItem = document.getElementById('four');
// If it has class attribute

if (firstItem.hasAttribute('class')) {
  // Get the attribute
  var attr = firstItem.getAttribute('class');

  // Add the value of the attribute after the list
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}
if (fourItem.hasAttribute('class')) {
  // Get the attribute
  var attr4 = fourItem.getAttribute('class');

  // Add the value of the attribute after the list
  var el4 = document.getElementById('scriptResults4');
  el4.innerHTML = '<p>The four item has a class name: ' + attr4 + '</p>';
}