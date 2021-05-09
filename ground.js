class Surface{
    constructor(x,y,width,height){
        var options = {

           
            isStatic:true
 }

     this.body = Matter.Bodies.rectangle(x,y,width,height,options)
     this.width = width;
     this.height = height;
     Matter.World.add(myworld,this.body)
    }

    display(){
        push()
        rectMode(CENTER)
        fill("red")
        stroke("yellow")
        strokeWeight(3)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.width,this.height)
        pop()
    
        
    }
}