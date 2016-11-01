'use strict';

var allProducts = [];
var currentImages = [];
var clickTotal = 0;

function Product(name,filePath,description){
  this.name = name;
  this.path = filePath;
  this.description = description;
  this.numShown = 0;
  this.numClicks = 0;
  this.id = name;
  this.class = 'images';
  allProducts.push(this);
  this.repeat = false;
}

var bag = new Product('bag', 'images/bag.png', 'Bring R2/D2 with you!');
var banana = new Product('banana', 'images/banana.png', 'Never slice a banana without this again!');
var bathroom = new Product('bathroom', 'images/bathroom.png', 'Do your business while you do your business!');
var boots = new Product('boots', 'images/boots.png', 'Toes were meant to be free!');
var breakfast = new Product('breafkast', 'images/breakfast.png', 'Who doesn\'t want THIS?');
var bubblegum = new Product('bubblegum', 'images/bubblegum.png', 'Itsa spicey-a-meatball! Have fun with this new gum!');
var chair = new Product('chair', 'images/chair.png', 'Sexy, yet ergonomic.');
var cthulhu = new Product('cthulhu', 'images/cthulhu.png', 'Why pay homage casually? Choose the greater evil!');
var dogDuck = new Product('dog-duck', 'images/dog-duck.png', 'Instantly converts your dog into a duck.');
var dragon = new Product('dragon', 'images/dragon.png', 'Not feeling up to slaying the beast? Save yourself the work!');
var pen = new Product('pen', 'images/pen.png', 'Eat, Write, do whatever!');
var petSweep = new Product('pet-sweep', 'images/pet-sweep.png', 'Make your good boy/girl even better!');
var scissors = new Product('scissors', 'images/scissors.png', 'For real \'Za enthusiasts only');
var shark = new Product('shark', 'images/shark.png', 'Is your kid overly excited for shark-week? Don\'t miss this one!');
var baby = new Product('baby-sweep', 'images/baby.png', 'Being a parent is hard enough, why not benefit from all that youthful energy?');
var tauntaun = new Product('tauntaun', 'images/tauntaun.png', 'This new product Strikes Back with plush interior. (will not keep you alive in snowstorm)');
var unicorn = new Product('unicorn', 'images/unicorn.png', 'Prolong your life and confronting your weird diets!');
var usb = new Product('usb', 'images/usb.png', 'To be honest, not sure why anyone would want this.');
var waterCan = new Product('water-can', 'images/water-can.png', 'It never runs out of water! -Ryan Lochte');
var wineGlass = new Product('wine-glass', 'images/wine-glass.png', 'Impress AND confuse even your snobbiest of wino friends!');

var zone1 = document.getElementById('zone1');
var zone2 = document.getElementById('zone2');
var zone3 = document.getElementById('zone3');

function reset(){
  for(var i = 0; i < allProducts.length; i++) {
    allProducts[i].repeat = false;
    console.log('I\'ve reset!');
  }
}

function randomProduct(){
  var index = Math.floor(Math.random() * allProducts.length);
  var choice = allProducts[index];
  if(choice.repeat === false) {
    currentImages.push(choice);
    return choice;
  } else {
    return randomProduct();
  }
}

function displayProducts(event){
  console.log(event);
  if(currentImages.length === 0) {
    var product1 = randomProduct();
    zone1.setAttribute('style', 'background-image: url(' + product1.path + ')');
    product1.numShown++;
    product1.repeat = true;
    var product2 = randomProduct();
    zone2.setAttribute('style', 'background-image: url(' + product2.path + ')');
    product2.numShown++;
    product2.repeat = true;
    var product3 = randomProduct();
    zone3.setAttribute('style', 'background-image: url(' + product3.path + ')');
    product3.numShown++;
    product3.repeat = true;
  }
  currentImages = [];
  clickTotal++;
  if(clickTotal >= 25) {
    zone1.removeEventListener('click', displayProducts);
    zone2.removeEventListener('click', displayProducts);
    zone3.removeEventListener('click', displayProducts);
    console.log('we\'ve reached the limit!');
  }
}

zone1.addEventListener('click', displayProducts);
zone2.addEventListener('click', displayProducts);
zone3.addEventListener('click', displayProducts);
