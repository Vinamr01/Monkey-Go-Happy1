
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var survivalTime;

function preload(){
  
  
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
monkey = createSprite(80 , 315 , 20 , 20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1;
  

  
  ground = createSprite(400 , 350 , 900 , 10);
  ground.velocityX = 4;
  ground.x = ground.width/2;
  console.log(ground.x);
  ground.visible = true;

  survivalTime= 0;
}


function draw() {
 background(220);
  
  
  stroke("white");
  textSize(20);
  fill("black")
text("SurvivalTime: "+ survivalTime, 200,50);
    
  
  
if(keyDown("space") && monkey.y>=100)  {
  monkey.velocityY = -8;
}
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
    if (ground.x > 0){
      ground.x = ground.width/2;
    }
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60)
  
  
  
  monkey.collide(ground);
  
  food();
  obstacles();
 drawSprites(); 
}
 
function food(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(200 , Math.round(random(120 , 200)) , 10 , 10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 50;
    
    bananaGroup = new Group();
    bananaGroup.add(banana);
  }
}

function obstacles(){
  
  if(frameCount % 300 === 0){
    obstacle = createSprite(240 , 305 , 10 , 10);
    obstacle.velocityX = -3;
    obstacle.lifeTime = 100;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
  }
  
}




