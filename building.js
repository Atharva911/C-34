/*class Tower{
    constructor(x,y,width,height){
        var options = {

            restitution:0.4,
            friction: 1.0,
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
*/

class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.World.add(myworld, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black")
        stroke(255)
        strokeWeight(3)
        rect(0,0,this.width, this.height);
        pop();
      }
}                      
