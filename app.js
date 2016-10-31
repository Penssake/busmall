'use strict';

function Product(name,filePath,description){
  this.name = name;
  this.path = filePath;
  this.description = description;
  this.numShown = 0;
  this.numClicks = 0;
  this.id = name;
  allProducts.push(this);
}

var allProducts = [
  new Product('bag', 'images/bag.png', 'Bring R2/D2 with you!'),
  new Product('banana', 'images/banana.png', 'Never slice a banana without this again!'),
  new Product('bathroom', 'images/bathroom.png', 'Do your business while you do your business!'),
  new Product('boots', 'images/boots.png', 'Toes were meant to be free!'),
  new Product('breafkast', 'images/breakfast.png', 'Who doesn\'t want THIS?'),
  new Product('bubblegum', 'images/bubblegum.png', 'Itsa spicey-a-meatball! Have fun with this new gum!'),
  new Product('chair', 'images/chair.png', 'Sexy, yet ergonomic.'),
  new Product('cthulhu', 'images/cthulhu.png', 'Why pay homage casually? Choose the greater evil!'),
  new Product('dog-duck', 'images/dog-duck.png', 'Instantly converts your dog into a duck.'),
  new Product('dragon', 'images/dragon.png', 'Not feeling up to slaying the beast? Save yourself the work!'),
  new Product('pen', 'images/pen.png', 'Eat, Write, do whatever!'),
  new Product('pet-sweep', 'images/pet-sweep.png', 'Make your good boy/girl even better!'),
  new Product('scissors', 'images/scissors.png', 'For real \'Za enthusiasts only'),
  new Product('shark', 'images/shark.png', 'Is your kid overly excited for shark-week? Don\'t miss this one!'),
  new Product('baby-sweep', 'images/baby-sweep.png', 'Being a parent is hard enough, why not benefit from all that youthful energy?'),
  new Product('tauntaun', 'images/tauntaun.png', 'This new product Strikes Back with plush interior. (will not keep you alive in snowstorm)'),
  new Product('unicorn', 'images/unicorn.png', 'Prolong your life and confronting your weird diets!'),
  new Product('usb', 'images/usb.png', 'To be honest, not sure why anyone would want this.'),
  new Product('water-can', 'images/water-can.png', 'It never runs out of water! -Ryan Lochte'),
  new Product('wine-glass', 'images/wine-glass.png', 'Impress AND confuse even your snobbiest of wino friends!')
];

var currentImgs = [];

function randomProduct(){
  var index = Math.floor(Math.random(allProducts.length));
  
}

function displayProducts(){
  for(var rounds = 0; rounds < 26; rounds++){
    //set selectionsMade Display equal to rounds//;

  }
}
