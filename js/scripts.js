var gallon = parseFloat(prompt("Enter how many gallons you have"));
var gallonsToLiters = function(gallon) {
  return gallon * 3.78;
};
var answer = gallonsToLiters(gallon);
alert(answer);

var liters = parseFloat(prompt("Enter the number of liters:"));
var litersToGallons = function(liters) {
  return liters / 3.78;
};
var answer = litersToGallons(liters);
alert(answer);
