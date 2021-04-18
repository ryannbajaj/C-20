var fixedRect, movingRect;




function setup() {
  createCanvas(800,400);   
  //createSprite(400, 200, 50, 50);
fixedRect = createSprite(400,200,60,60);
movingRect = createSprite(100,200,30,30);
fixedRect.debug=true
movingRect.debug=true
fixedRect.shapeColor = 'red'
movingRect.shapeColor = 'red'
}

function draw() {
  background("black");  
  drawSprites();
movingRect.x = mouseX
movingRect.y = mouseY

if(movingRect.x- fixedRect.x < movingRect.width/2 +fixedRect.width/2 &&
  fixedRect.x- movingRect.x < movingRect.width/2 +fixedRect.width/2 &&
  movingRect.y- fixedRect.y < movingRect.height/2 +fixedRect.height/2 &&
  fixedRect.y- movingRect.y < movingRect.height/2 +fixedRect.height/2
  ){
movingRect.shapeColor = 'blue'
fixedRect.shapeColor = 'blue'
}
else{
  fixedRect.shapeColor = 'red'
  movingRect.shapeColor = 'red'

}

}