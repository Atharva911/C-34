class Rope{
    constructor(bodyA,pointB){
        var options = {
        
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
           
 }
     
     this.pointB=pointB; 
     this.constraint= Matter.Constraint.create(options) 
     Matter.World.add(myworld,this.constraint)
    }

    display(){
        push()
        fill("black")
        stroke(255)
        strokeWeight(3)
        line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.pointB.x,this.pointB.y)
        pop()

    
        
    }
}