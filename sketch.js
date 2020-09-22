var bananaImage ,banana ,banana_group ,obstacleImage ,obstacle ,obstaclegroup ,background_ ,background_image ,monkey ,monkey_image ,ground;

var score = 0;

function preload() {
  
  
  
  background_image = loadImage ("jungle.jpg");
  
  monkey_image = loadAnimation("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
   
  obstacleImage = loadImage("stone.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  banana_group = new Group();
  obstaclegroup = new Group();
  
  background_ = createSprite(200,200,50,50);
  background_.addImage(background_image);
  background_.velocityX = -5;
  background_.x = background_.width /2;
  
  monkey = createSprite(50,350,50,50);
  monkey.addAnimation("monkey",monkey_image);
  monkey.scale = 0.1;
  
  ground = createSprite(200,370,400,10);
  
  
}

function draw() {
  background(220);
  
  if (background_.x < 0){
      background_.x = background_.width/2;
  }

  food();
  
  obstacles();
  
  ground.visible = false;

  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >320) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;

  
  
    if(banana_group.isTouching(monkey)){
      banana_group.destroyEach();
      score = score+2;
    }
  
    if(obstaclegroup.isTouching(monkey)){
      monkey.scale = 0.1;
      score = 0;
    }
  
  switch(score){
    case 10: monkey.scale = 0.12;
    break;
    case 20: monkey.scale = 0.14;
    break;
    case 30: monkey.scale = 0.16;
    break;
    case 40: monkey.scale = 0.18;
    break;
    default: break;
  }
  
  
  
  
  drawSprites();
  
  textSize(25);
  fill("white");
  text("score " + score,25,25);
}


function food(){

  if(frameCount % 60 === 0){
    banana = createSprite(500,350,50,50);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -6;
    banana_group.add(banana);  
  }
}

function obstacles(){

  if(frameCount % 100 === 0){
    obstacle = createSprite(500,350,50,50);
    obstacle.addImage("banana",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstaclegroup.add(obstacle);  
  }
}


















