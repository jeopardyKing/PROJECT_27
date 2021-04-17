
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  var z =100;
	
	roof=new Roof(400,250-z,230,20);
	bob1 = new bob(320,575-z,40)
	bob2 = new bob(360,575-z,40)
	bob3 = new bob(400,575-z,40)
	bob4 = new bob(440,575-z,40)
	bob5 = new bob(480,575-z,40)

	//constraints 
	thread1 = new Thread(bob1.body,roof.body,-80, 0);
  thread2 = new Thread(bob2.body,roof.body,-40,0);
	thread3 = new Thread(bob3.body,roof.body,0,0);
	thread4 = new Thread(bob4.body,roof.body,40,0);
	thread5 = new Thread(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bob1.body,bob1.body.position,
								{x:-50,y:-45});
	
		  }
	}


function draw() {
  rectMode(CENTER);
  background("white");

  //drawing them
  bob1.render(75);
  bob2.render(75);
  bob3.render(75);
  bob4.render(75);
  bob5.render(75);
  roof.render();

  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  thread5.display();
  
  
  drawSprites();
 
}



