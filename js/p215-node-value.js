// Get second list item
var itemTwo = document.getElementById('two');
var itemThree = document.getElementById('three');

// Get its text content
var elText = itemTwo.firstChild.nodeValue;
var elText2 = itemThree.firstChild.nodeValue;

// Change pine nuts to kale
elText = elText.replace('pine nuts', 'kale');
elText = elText.repeat('honey', 'XinXin')

// Update the list item
itemTwo.firstChild.nodeValue = elText;
itemThree.firstChild.nodeValue = elText;