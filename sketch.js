
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,40,30);
	mango2=new mango(1050,110,30);
	mango3=new mango(900,150,30);
	mango4=new mango(975,160,30);
	mango5=new mango(1200,200,30);
	mango6=new mango(950,215,30);
	mango7=new mango(1050,215,30);
	mango8=new mango(1150,115,30);



	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stoneObj = new stone(270, 350, 50)

	slingshot = new sling(stoneObj.body,{x:240, y:420})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  text("Press Space to Get ball back!", 200, 50);
  console.log(mango3.body.speed)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stoneObj.display();

  groundObject.display();

  slingshot.display();

  detectollision(stoneObj,mango1); 
  detectollision(stoneObj,mango2); 
  detectollision(stoneObj,mango3); 
  detectollision(stoneObj,mango4); 
  detectollision(stoneObj,mango5); 
  detectollision(stoneObj,mango6); 
  detectollision(stoneObj,mango7); 
  detectollision(stoneObj,mango8);

}

function mouseDragged(){

	Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){

	slingshot.fly();

}

function keyPressed(){

	if(keyCode === 32){

		slingshot.attach(stoneObj.body)

	}

}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position 
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r) { 
		//console.log(distance); 
		Matter.Body.setStatic(lmango.body,false); 
	}
 }
		