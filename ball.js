class Cirlce{
    constructor(x,y,width,height){
        var options = {

            restitution:2,
            density:2,
            frictionAir: 0.005
 }

     this.body = Matter.Bodies.rectangle(x,y,width,height,options)
     this.width = width;
     this.height = height;
     Matter.World.add(myworld,this.body)
    }

    display(){
        push()
        ellipseMode(RADIUS)
        fill("red")
        stroke("yellow")
        strokeWeight(3)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipse(0,0,this.width,this.height)
        pop()
    
        
    }
}