const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowman, snowmanIMG;
var jumpSound;
var invisibleGround;
var snow,snowIMG5;

function preload(){
  
  backgroundIMG=loadImage("snow3.jpg");
  snowmanIMG=loadImage("Snowman.png");
  jumpSound= loadSound("Jumping Ice.wav");
  snowIMG5 = loadImage("snow5.webp");
  
}
function setup() {
  createCanvas(1100,600);
  snowman = createSprite(170, 380, 50, 50);
  snowman.scale=0.2;
  //jumpSound.play();

  invisibleGround = createSprite(150,380,400,5);
  invisibleGround.visible = false;

   invisibleGround2 = createSprite(150,320,400,5);
   invisibleGround2.visible = false;

   snow1 = createSprite(140, 320, 50, 50);
  snow1.scale=0.07;

  snow2 = createSprite(210, 320, 50, 50);
  snow2.scale=0.07;
  
}

function draw() {
  background(backgroundIMG);  

  stroke("black");
  strokeWeight(5);
  textSize(20);
  text("Press Space for Magic (: ", 420, 30);

  snowman.addImage(snowmanIMG);
  snowman.collide(invisibleGround);
  snow1.collide(invisibleGround2); 
  snow2.collide(invisibleGround2); 

  snow1.addImage(snowIMG5);

  snow2.addImage(snowIMG5);

   //jump when the space key is pressed
   if(keyDown("space")&& snowman.y >= 100) {
    snowman.velocityY = -12;
    jumpSound.play();
    snow1.velocityY=-12;
    snow2.velocityY=-12;
  }

   //add gravity
    snowman.velocityY = snowman.velocityY + 0.8
    snow1.velocityY = snow1.velocityY + 0.8    
    snow2 .velocityY = snow2.velocityY + 0.8  

  drawSprites();
}