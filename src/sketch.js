var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;

var foodGroup, obstacleGroup;

var score;
var ground, fakeGround;

var survivalTime = 0;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(100, 300);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200, 340, 400, 5);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  fackGround = createSprite(300, 340, 300, 5);

  foodGroup = new Group();
  obstacleGroup = new Group(); 
}

function draw() {
  background("cyan");

  if (ground.x === 100) {
    ground.x = 200;
  }

  monkey.collide(ground);
  
  if (keyDown("space") && monkey.y === 306.8) {
    monkey.velocityY = -20;
  } else {
    monkey.velocityY++;
  }

  survivalTime = Math.round(frameCount/frameRate());
  fill("black");
  textSize(20);
  text(survivalTime, 350, 50);

  makingOffood();
  obstacles();

  drawSprites();
}

function makingOffood() {
  rand = Math.round(random(120, 200));
  banana = createSprite(500, 500);

  if (frameCount % 80 === 0) {
    banana = createSprite(400, rand);
    banana.addImage("fruit", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 80;
  }

  foodGroup.add(banana);
}

function obstacles() {
  obstacle = createSprite(-100,-100);
  
  if (frameCount % 300 === 0) {
    obstacle = createSprite(300, 320);
    obstacle.addImage("rock", obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 80;
  }
  
  obstacleGroup.add(obstacle);
}