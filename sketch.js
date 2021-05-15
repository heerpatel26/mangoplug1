
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,treeimg, boyimg;
var launchingForce=100;

function preload(){
	boyimg=loadImage("images/boy.png");
	treeimg=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;

	groundObject=new ground();
	stoneObj=new stone(100,460,23); 

	mango1=new mango(600,290,34);
    mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,250,35);
	mango7=new mango(825,170,35);
	mango8=new mango(880,260,35);
	mango9=new mango(980,305,35);
	
	launcherObject=new launcher(stoneObj.body,{x:100,y:465})
	treeObj=createSprite(775, 368);
	treeObj.addImage(treeimg);
	treeObj.scale=0.42;

	boy=createSprite(160, 550);
	boy.addImage(boyimg);
	boy.scale=0.125;
	
	
  
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background("pink");
  
 
  
  Engine.update(engine)
  detectCollission(stoneObj,mango1);
  detectCollission(stoneObj,mango2);
  detectCollission(stoneObj,mango3);
  detectCollission(stoneObj,mango4);
  detectCollission(stoneObj,mango5);
  detectCollission(stoneObj,mango6);
  detectCollission(stoneObj,mango7);
  detectCollission(stoneObj,mango8);
  detectCollission(stoneObj,mango9);

  drawSprites();

  stoneObj.display();
  groundObject.display();
  
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  
  

  
 
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}



function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectCollission(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance)
 console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
	  //console.log(distance);
	  //Sets the body as static
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
  