var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	//Creatting all sprite and give image, scales
	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//Create a Ground
	//groundSprite=createSprite(width/2, height-35, width,10);
	//World.add(world, ground);
	//groundSprite.shapeColor=color(255)
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);


		 
	 //Create a box as new box and give calor
	 box1 = new Box(295,650,20,100,"red");
	 box2 = new Box(400,690,200,20,"red");
     box3 = new Box(500,650,20,100,"red");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

	
  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}	
	
	box1.display();
	box2.display();
	box3.display();

  Engine.update(engine);
}