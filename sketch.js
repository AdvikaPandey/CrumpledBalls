const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperSprite, dustbinSprite1,dustbinSprite2,dustbinSprite3, groundSprite;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperSprite = new Paper(200,450,50);
	groundSprite = new Ground(800,670,1600,20);
	dustbinSprite1 = new Dustbin(1100,667,200,20);
	dustbinSprite2 = new Dustbin(1080,667,20,100);
	dustbinSprite3 = new Dustbin(1180,667,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperSprite.display();
  groundSprite.display();
  dustbinSprite1.display();
  dustbinSprite2.display();
  dustbinSprite3.display();
  
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:55,y:-10});
	}
}



