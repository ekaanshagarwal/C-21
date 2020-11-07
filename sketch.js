var bullet;
var thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1400,400);

  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  bullet = createSprite(100,200,40,20);
  bullet.velocityX = 5;
  bullet.shapeColor = color("white");
  weight = random(30,52);

}

function draw() {
  background(10,10,10); 

  hasCollided;
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10)
    {
       wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

drawSprites();
}
function hasCollided(lbullet,lwall){
   bulletRightEdge=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge=wallLeftEdge)
   {
     return true
   }
     return false;
}