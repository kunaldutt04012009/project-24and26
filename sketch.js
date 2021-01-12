
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bin1;
var paperball;
var dustbinImg,paperImg

function preload(){
	dustbinImg=loadImage("sprites/dustbin.png");
	paperball=loadImage("sprites/paper.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	

	 bin1=new Bin();
	 paperball=new Paper(100,600,40);
	 
	 

	Engine.run(engine);
	
}


function draw() {
	background(144);
    Engine.update(engine);
    rectMode(CENTER);
  
  
  drawSprites();
  bin1.display();
  paperball.display();
 

}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:70,y:-70});
	}

}


