//Game States
var PLAY=1;
var END=0;
var gameState=1;
var alien1, alien1Img;
var alien12, alien12Img;
var fruit1,fruit1Img;
var fruit12,fruit12Img;
var fruit2,fruit2Img;
var fruit21,fruit21Img
var fruit3,fruit3Img;
var fruit3_1,fruit3_1Img;
var fruit4,fruit4Img;
var fruit4_1,fruit4_1Img;
var gameOver, gameOverImg;
var knife;
var knifeImage;
var swooshMP3;
var score = 0;


function preload(){
  
  knifeImage = loadImage("knife.png");
  alien1Img = loadAnimation("alien1.png","alien2.png");
  alien12Img = loadAnimation("alien1.png","alien2.png");
  fruit1Img = loadImage("fruit1.png");
  fruit12Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit21Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");
  fruit3_1Img = loadImage("fruit3.png");
  fruit4_1Img = loadImage("fruit4.png");
  gameOverImg = loadImage("gameover.png");
  swooshMP3 = loadSound("knifeSwoosh.mp3");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  alienG = new Group();
  fruit__1G = new Group();
  fruit__2G = new Group();
  fruit3__G = new Group();
  fruit4__G = new Group();
  fruit21__G = new Group();
  alien12__G = new Group();
  fruit12__G = new Group();
  fruit3__1G = new Group();
  fruit4__1G = new Group();
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    spawnFruit1();
    spawnFruit12();
    spawnFruit2();
    spawnFruit21();
    spawnFruit3();
    spawnFruit4();
    spawnFruit3_1();
    spawnFruit4_1();
    spawnAlien();
    spawnAlien2();
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
     if(knife.isTouching(fruit__1G)) {
    score = score + 2;
    fruit__1G.destroyEach(); 
       swooshMP3.play();
  }
   if(knife.isTouching(fruit__2G)) {
    score = score + 1;
     fruit__2G.destroyEach();
      swooshMP3.play();
  }
  if(knife.isTouching(fruit3__G)) {
    score = score + 4;
    fruit3__G.destroyEach();
     swooshMP3.play();
  }
  if(knife.isTouching(fruit4__G)) {
    score = score + 2;
    fruit4__G.destroyEach();
     swooshMP3.play();
  }
  if(knife.isTouching(fruit21__G )) {
    score = score + 6;
    fruit21__G.destroyEach();
     swooshMP3.play();
  } 
  }
   if(knife.isTouching(fruit12__G)) {
    score = score + 5;
     fruit12__G.destroyEach();
      swooshMP3.play();
  } 
  if(knife.isTouching(fruit3__1G)) {
    score = score + 1;
     fruit3__1G.destroyEach();
    swooshMP3.play();
  } 
  if(knife.isTouching(fruit4__1G)) {
    score = score + 2;
     fruit4__1G.destroyEach();
     swooshMP3.play();
  } 
  if(knife.isTouching(alienG) ||knife.isTouching(alien12__G)) {
    gameOver = createSprite(300,300,25,25)
    gameOver.addAnimation("over",gameOverImg);
     swooshMP3.play();
    gameState = END;
  }
  
  if(gameState === END) {
    alienG.setVelocityEach(0);
  fruit__1G.setVelocityEach(0);
  fruit__2G.setVelocityEach(0);
  fruit3__G.setVelocityEach(0);
  fruit4__G.setVelocityEach(0);
  fruit21__G.setVelocityEach(0); 
  alien12__G.setVelocityEach(0); 
  fruit12__G.setVelocityEach(0); 
  fruit3__1G.setVelocityEach(0); 
  fruit4__1G.setVelocityEach(0);
  }
  
  
  
  
  
  drawSprites();
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
function spawnAlien() {
  if(frameCount % 410 === 0) {
  alien1 = createSprite(0,Math.round(random(20, 580)), 10, 10);
  alien1.addAnimation("alien",alien1Img);
  alien1.velocityX = (4 + (score/20));
  alien1.scale = 0.9;
    alienG.add(alien1);
  }
}
function spawnFruit1() {
  if(frameCount % 450 === 0) {
  fruit1 = createSprite(0,Math.round(random(20, 580)), 10, 10);
  fruit1.addAnimation("fruit1",fruit1Img);
  fruit1.velocityX = (3 + (score/20));
  fruit1.scale = 0.2;
    fruit1.lifetime = 400;
    fruit__1G.add(fruit1);
  }
}
function spawnFruit2() {
  if(frameCount % 450 === 0) {
  fruit2 = createSprite(0,Math.round(random(20, 580)), 10, 10);
  fruit2.addAnimation("fruit2",fruit2Img);
  fruit2.velocityX = (2 + (score/20));
  fruit2.scale = 0.2;
    fruit2.lifetime = 400;
    fruit__2G.add(fruit2);
  }
}
function spawnFruit3() {
  if(frameCount % 400 === 0) {
  fruit3 = createSprite(0,Math.round(random(20, 580)), 10, 10);
  fruit3.addAnimation("fruit3",fruit3Img);
  fruit3.velocityX = (2 + (score/20));
  fruit3.scale = 0.2;
    fruit3.lifetime = 400;
    fruit3__G.add(fruit3);
  }
}
function spawnFruit4() {
  if(frameCount % 390 === 0) {
  fruit4 = createSprite(0,Math.round(random(20, 580)), 10, 10);
  fruit4.addAnimation("fruit4",fruit3Img);
  fruit4.velocityX = (2 + (score/20));
  fruit4.scale = 0.2;
    fruit4.lifetime = 400;
    fruit4__G.add(fruit4);
  }
}
function spawnFruit21() {
  if(frameCount % 480 === 0) {
  fruit21 = createSprite(Math.round(random(600,600)),Math.round(random(20, 580)), 10, 10);
  fruit21.addAnimation("fruit2",fruit2Img);
  fruit21.velocityX = -(2 + (score/20));
  fruit21.scale = 0.2;
    fruit21.lifetime = 400;
    fruit21__G.add(fruit21);
  }}
function spawnAlien2() {
  if(frameCount % 560 === 0) {
  alien12 = createSprite(Math.round(random(600,600)),Math.round(random(20, 580)), 10, 10);
  alien12.addAnimation("alien",alien1Img);
  alien12.velocityX = -(5 + (score/20));
  alien12.scale = 0.9;
  alien12.lifetime = 400;
    alien12__G.add(alien12);
  }
}
function spawnFruit12() {
  if(frameCount % 490 === 0) {
fruit12=createSprite(Math.round(random(600,600)),Math.round(random(20, 580)), 10, 10);
  fruit12.addAnimation("fruit1",fruit1Img);
  fruit12.velocityX = -(2 + (score/20));
  fruit12.scale = 0.2;
    fruit12.lifetime = 400;
    fruit12__G.add(fruit12);
  }
}
function spawnFruit3_1() {
  if(frameCount % 390 === 0) {
fruit3_1 = createSprite(Math.round(random(600,600)),Math.round(random(20, 580)), 10, 10);
  fruit3_1.addAnimation("fruit3",fruit3Img);
  fruit3_1.velocityX = -(2 + (score/20));
  fruit3_1.scale = 0.2;
    fruit3_1.lifetime = 400;
    fruit3__1G.add(fruit3_1);
  }
}
function spawnFruit4_1() {
  if(frameCount % 450 === 0) {
fruit4_1 = createSprite(Math.round(random(600,600)),Math.round(random(20, 580)), 10, 10);
  fruit4_1.addAnimation("fruit4",fruit3Img);
  fruit4_1.velocityX = -(2 + (score/20));
  fruit4_1.scale = 0.2;
    fruit4_1.lifetime = 400;
  fruit4__1G.add(fruit4_1);  
    
  }
}

