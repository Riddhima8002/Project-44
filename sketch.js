const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var treeimg,riceimg,grassimg,birdimg,waterimg,wheatimg;
var tree,rice,grass,bird,water,wheat ;
var bg ;
var form,player,game;
var gameState=0
var playerCount;
var database;
function preload() {
   treeimg=loadImage("images/tree img.jpg");
   riceimg=loadImage("images/rice.jpg");
   waterimg=loadImage("images/water.jpg");
   wheatimg=loadImage("images/wheat.jpg");
   grassimg=loadImage("images/grass.jpg");
   //birdimg=loadImage("image/bird.jpg");
}

function setup(){
    var canvas = createCanvas(1200,700);
    //engine = Engine.create();
   // world = engine.world;
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();

}

function draw(){

    // add condition to check if any background image is there to add

background(grassimg);

    Engine.update(engine);
    if(playerCount === 1){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }
}



   


