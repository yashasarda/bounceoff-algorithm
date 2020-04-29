var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
movingbox=createSprite(200,350,30,30);
fixedbox=createSprite(400,350,30,50);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  movingbox.velocityX = +1;
 // fixedbox.velocityX = +1;
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect,fixedRect);
 bounceoff(movingbox,fixedbox) 
  drawSprites();
}




