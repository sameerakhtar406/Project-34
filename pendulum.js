class Pendulum
{
constructor(x,y,r)
{
var options={
restitution:1.25,
frictionAir:0,
slop:1,
inertia:Infinity
}
this.x=x;
this.y=y;
this.r=r

this.body=Bodies.circle(this.x, this.y,(this.r)/2, options)
World.add(world, this.body);

}
display() { 
var paperpos=this.body.position; 
push() 
translate(paperpos.x, paperpos.y); 
rectMode(CENTER)
strokeWeight(2)
stroke(0,113,225) 
fill("black") 
ellipse(0,0,this.r, this.r); 
pop() 
} 
}