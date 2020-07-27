const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block;
var polygon, polygonImg;

function preload(){
  polygonImg = loadImage("images/polygon.jpg");
}

function setup() {
  createCanvas(800,400);
 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(305,300,240,10);
  stand = new Ground(600,200,190,10);

  //1st pyramid
  //level 1
  fill(0,0,255);
  block1 = new Block(215,275,30,40);
  block2 = new Block(245,275,30,40);
  block3 = new Block(275,275,30,40);
  block4 = new Block(305,275,30,40);
  block5 = new Block(335,275,30,40);
  block6 = new Block(365,275,30,40);
  block7 = new Block(395,275,30,40);

  //level 2
  fill(20,20,255);
  block8 = new Block(245,235,30,40);
  block9 = new Block(275,235,30,40);
  block10 = new Block(305,235,30,40);
  block11 = new Block(335,235,30,40);
  block12 = new Block(365,235,30,40);

  //level 3
  block13 = new Block(275,215,30,40);
  block14 = new Block(305,215,30,40);
  block15 = new Block(335,215,30,40);

  //top
  block16 = new Block(305,175,30,40);


  //2nd pyramid
  //level 1
  block17 = new Block(540,180,30,40);
  block18 = new Block(570,180,30,40);
  block19 = new Block(600,180,30,40);
  block20 = new Block(630,180,30,40);
  block21 = new Block(660,180,30,40);

  //level 2
  block22 = new Block(570,140,30,40);
  block23 = new Block(600,140,30,40);
  block24 = new Block(630,140,30,40);

  //level 3
  block25 = new Block(600,100,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background("white");  
  Engine.update(engine);
 
  ground.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,20);
  
  
  slingshot.display();



drawSprites();


}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
