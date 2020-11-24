
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(2050,950);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40; 
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500;

	bob2=new Pendulum(500,200,55);
	rope2=new ROPE(bob2.body,{x:500,y:50}) 

	bob1=new Pendulum(560,200,55);
	rope1=new ROPE(bob1.body,{x:560,y:50}) 
	
	bob3=new Pendulum(610,200,55);
	rope3=new ROPE(bob3.body,{x:610,y:50})
	
	bob4=new Pendulum(460,200,55);
	rope4=new ROPE(bob4.body,{x:460,y:50})

	bob5=new Pendulum(670,200,55);
	rope5=new ROPE(bob5.body,{x:670,y:50})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob2.display();
  bob1.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY})
}

