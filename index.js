const pound = document.getElementById("pound");
const kilogram = document.getElementById("kilogram");
const grams = document.getElementById("grams");
const ounces = document.getElementById("ounces");

pound.addEventListener("click", function(e){
  let x = e.target.value;
  kilogram.value = (x / 2.2046).toFixed(2);
grams.value = (x/0.0022046).toFixed(2);
ounces.value = (x * 16).toFixed(2);
});

kilogram.addEventListener("click", function(e){
  let x = e.target.value;
  pound.value = (x  * 2.2046).toFixed(2);
grams.value =  (x * 1000).toFixed(2);
ounces.value = (x * 35.274).toFixed(2);

});

grams.addEventListener("click", function(e){
  let x = e.target.value;
  kilogram.value = (x / 1000).toFixed(2);
pound.value = (x * 0.0022046).toFixed(2);
ounces.value = (x * 0.035274).toFixed(2);
});

ounces.addEventListener("click", function(e){
  let x = e.target.value;
  kilogram.value = (x / 35.274).toFixed(2);
grams.value = (x / 0.035274).toFixed(2);
pound.value = (x * 0.0625).toFixed(2);
});

const clear = document.getElementById("clear");

clear.addEventListener("click", function(){
  pound.value = "";
  kilogram.value = "";
  ounces.value = "";
  grams.value = "";
});