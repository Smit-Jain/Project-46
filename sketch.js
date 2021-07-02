var ground;
var lava, lavaImage;
var player, playerImage;
var edges;
var brick, brickGroup;
var invisibleGround;

function preload(){
  lavaImage=loadImage("Lava.jpg");
  playerImage=loadImage("Player.png");
}

function setup() {
  createCanvas(400,600);

  ground=createSprite(200,300,400,1200);
  ground.velocityY=2;
  ground.shapeColor="black";

  lava=createSprite(200,600,400,50);
  lava.addImage(lavaImage);
  lava.scale=0.7;

  player=createSprite(200,450,50,50);
  player.addImage(playerImage);
  player.scale=0.2;

  invisibleGround=createSprite(200,500,400,5);
  invisibleGround.shapeColor="black";

  brickGroup=new Group();

  edges=createEdgeSprites();
}

function draw() {
  background(0);
  if(ground.y>500){
    ground.y=300;
  }  

  if(keyDown("LEFT_ARROW")){
    player.x=player.x-2;
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+2;
  }
  if(keyWentDown("space")){
    player.velocityY=-8;
  }
  player.velocityY=player.velocityY+0.8;

  createBrick();

  player.collide(edges);
  player.collide(invisibleGround);

  drawSprites();
}

function createBrick(){
  if(frameCount%100===0){
    brick=createSprite(random(25,375),250,50,10);
    brick.shapeColor="brown";
    brick.velocityY=2;
    brick.lifetime=300;
    brickGroup.add(brick);
  }
}