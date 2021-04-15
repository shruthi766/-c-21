var wall,thickness;
var bullet, speed,weight;

function setup() {
  createCanvas(1600,400);
  
 wall= createSprite(1200, 200, thickness, height/2);
bullet=createSprite(50,200,50,10);
thickness=random(22,83)
speed=random(55,90);
weight=random(223,321);
bullet.velocityX=speed;

}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)  {
   bullet .velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if( deformation>180){bullet.shapeColor="white";}

    if( deformation<180&&deformation>100)
    {bullet.shapeColor="white";}

    if(deformation>100) {bullet.shapeColor="white";}
  }

if( hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10){
wall.shapeColor="green";
  }
  if (damage<10){
    wall.shapeColor="red";
  }
}


drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightedge=lbullet.x+lbullet.width;
  wallLeftedge=lwall.x;
if (bulletRightedge>=wallLeftedge)
{
  return true

}
return false;
}