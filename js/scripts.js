var time = '...for now';
var game = 'My elden ring';
var review = ' review';
var lineInto = game + review + time + '. Super excited to play more!';
var lineIntoEl = document.getElementById('lineInto');

lineIntoEl.textContent = lineInto;

var price = 60;
var extraForUltimateEdition = .25
var ultimateEditionPrice = price + (price * extraForUltimateEdition);
var priceEl = document.getElementById('price');
var ultimateEditionPriceEl = document.getElementById('ultimateEditionPrice');

priceEl.textContent = price.toFixed(2);
ultimateEditionPriceEl.textContent = ultimateEditionPrice.toFixed(2);