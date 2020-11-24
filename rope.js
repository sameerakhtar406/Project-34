class ROPE{
    constructor (bodyA, pointB) 
    {
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1.2,
    length:300
    }
    this.pointB=pointB

    this.rope=Constraint.create(options) 
    World.add(world, this.rope)
    }   
    display(){
    
    var pointA=this.rope.bodyA.position; 
    var pointB=this.pointB;
    push();
    strokeWeight(4); 
    stroke(0,113,225)
    line(pointB.x,pointB.y,pointA.x,pointA.y);
    pop();
    }
    }
    