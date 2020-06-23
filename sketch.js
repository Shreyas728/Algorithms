var movingrect;
var fixedrect;

function setup() {
  movingrect = createSprite(400, 200, 50, 50);
 fixedrect = createSprite(500, 200, 50, 65);

  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue";
  createCanvas(800,400);
}

function draw() { 
  
  
  movingrect.y = mouseY ;
  movingrect.x = mouseX;

if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&movingrect.x-fixedrect.x <fixedrect.width/2+movingrect.width/2&&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2&&movingrect.y-fixedrect.y <fixedrect.height/2+movingrect.height/2){
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";

}
else{
  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue"; 
}
  background(0);  
  drawSprites();
}