var ground;
var obstacle,obstacleImage,obstaclesGroup;
var ball, ballImage;


function preload(){

obstacleImage= loadImage("unnamed.png");
ballImage = loadImage("voleyball.png");
}



function setup(){


    ground = createSprite(800 ,600,2000,10);

    ball = createSprite(20,557,20,20);
    ball.addImage(ballImage);
    ball.scale= 0.2;
    obstaclesGroup= new Group();
}




function draw(){
createCanvas(1520,600);





ball.collide(ground);
if(keyDown("space")){
    ball.velocityY = -9;
  
  }
  ball.velocityY = ball.velocityY+0.9;

  if(ball.isTouching(obstaclesGroup)){
      obstaclesGroup.SetVisibleEach = false;
      ball.visible = false;
      ground.visible= false;
      text ("Game Over", 760,300);
      survivaltime.visible = false
      obstaclesGroup.lifetime = 0;
      survivalTime = 0;
      obstaclesGroup.setLifetimeEach(-1);
      obstaclesGroup.setVelocityXEach(0);
  }
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+survivalTime,100,65)
  

spawnObstacle();

    drawSprites();
}


function spawnObstacle(){
    if(frameCount% 200=== 0){
       obstacle = createSprite(1500,580,350,350);
       obstacle.addImage(obstacleImage);
       obstacle.scale=0.3 ;
       
        obstacle.velocityX = -5;
      obstacle.lifetime = 400;
      obstaclesGroup.add(obstacle);
       }
  }