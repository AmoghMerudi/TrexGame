var trex, trexImage, ground, groundImage, invisibleGround, clouds, cloudImage, obstacles, obstacleImage1, obstacleImage2, obstacleImage3, obstacleImage4, obstacleImage5, obstacleImage6, obstacleGroup, cloudGroup, score

function preload(){
  
  trexImage = loadAnimation("trex1.png","trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacleImage1 = loadImage("obstacle1.png");
  obstacleImage2 = loadImage("obstacle2.png");
  obstacleImage3 = loadImage("obstacle3.png");
  obstacleImage4 = loadImage("obstacle4.png");
  obstacleImage5 = loadImage("obstacle5.png");
  obstacleImage6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(650, 200);
  edges = createEdgeSprites();
  
  trex = createSprite(60,100,10,10);
  trex.addAnimation("running", trexImage);
  trex.scale = 0.5;
  
  ground = createSprite(60,190,1250,5)
  ground.velocityX = -5
  ground.addImage(groundImage);
  
  invisibleGround = createSprite(60,195,1250,5);
  invisibleGround.visible = false;
  
  obstacleGroup = new Group();
  cloudGroup = new Group();
  
  score = 0;
}

function draw() {
  background("black");  
  
  if(keyDown("Space")){
    trex.velocityY = -20;         
  }
  
  trex.velocityY = trex.velocityY+2
  
  trex.collide(invisibleGround)
  
  if(ground.x<0){
    ground.x = 325;               
  }
  
  score = Math.round(score + (getFrameRate()/60));
  text("Score " + score,590,10);
  
  drawSprites();
  spawnClouds();
  spawnObstacles();
}

function spawnClouds() {
  if(frameCount % 60 === 0){
    clouds = createSprite(630,50,10,10);
    clouds.velocityX = -5;
    clouds.addImage(cloudImage)
    clouds.scale = 0.5;
    clouds.lifetime = 650/5;
    clouds.y = random(50,100);
    cloudGroup.add(clouds);
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0){
    obstacles = createSprite(630,175  ,10,10)
    obstacles.velocityX = -5
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:obstacles.addImage(obstacleImage1);
       break;
      case 2:obstacles.addImage(obstacleImage2);
       break;
      case 3:obstacles.addImage(obstacleImage3);
       break;
      case 4:obstacles.addImage(obstacleImage4);
       break; 
      case 5:obstacles.addImage(obstacleImage5);
       break;  
      case 6:obstacles.addImage(obstacleImage6);
       break;
       default: break;
    }
    obstacles.scale = 0.5;
    obstacles.lifetime = 650/5;
    obstacleGroup.add(obstacles);
  }
}