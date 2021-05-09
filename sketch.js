


var myengine
var myworld 
var block1 , block2 , block3 , block4 , block5 , block6 , block7 , block8
var dharti
var balls
var lines


function setup() {
  createCanvas(800,600);
myengine = Matter.Engine.create()
myworld= myengine.world;

block1 = new Block(600,395,40,40)
block2 = new Block(620,395,40,40)
block3 = new Block(640,395,40,40)
block4 = new Block(660,395,40,40)
block5 = new Block(597,300,40,40)
block6 = new Block(620,390,40,40)
block7 = new Block(650,390,40,40)
dharti = new Surface(400,400,800,10)
balls = new Cirlce(200,200,30,30)
lines = new Rope(balls.body,{x:200,y:50})






}

function draw() {
  background("grey");  
  Matter.Engine.update(myengine);

 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 dharti.display()
 balls.display()
 lines.display()







  
  
  
  
  
  
  
}
