var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers = 0;
var form, player, game;
var passedFinish;
var cars, car1, car2 ;

var track, car1_img, car2_img;

function preload(){
  track = loadImage("../images/track1.png");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");

  ground = loadImage("../images/ground.png");

  silver_img = loadImage("images/silver.png");
  gold_img = loadImage("images/gold.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(200, 200, 255);
  
  if(playerCount === 2 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers === 2){
    game.update(2);
  }
  if(gameState === 2 && finishedPlayers ===2){
    game.displayRanks();
  }
}

