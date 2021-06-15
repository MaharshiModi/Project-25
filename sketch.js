
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper1;

function setup() {
	createCanvas(1200, 900);

	engine = Engine.create();
	world = engine.world;

	paper1=new Paper();

	ground1 = new Ground(400, 800, 800, 20);
	bottomBox=new Dustbinb(610, 660, 100,20);
	
	sideBox=new Dustbin(550,620,20,100);
	
	sideBoxb = new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  
  paper1.display();

  bottomBox.display();
  sideBox.display();
  sideBoxb.display();

  ground1.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
	}
}



