const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var block, polygon, slingShot, ground, stand1, stand2, polygon_Img, ball, blocks;
var engine, world;
//var slingshot;

function preload(){
    polygon_Img = loadImage("polygon.png");
}

function setup(){
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    block1 = new Blocks(300,275,30,40);
    block2 = new Blocks(330,275,30,40);
    block3 = new Blocks(360,275,30,40);
    block4 = new Blocks(390,275,30,40);
    block5 = new Blocks(420,275,30,40);
    block6 = new Blocks(450,275,30,40);
    block7 = new Blocks(480,275,30,40);
    block8 = new Blocks(330,235,30,40);
    block9 = new Blocks(360,235,30,40);
    block10 = new Blocks(390,235,30,40);
    block11 = new Blocks(420,235,30,40);
    block12 = new Blocks(450,235,30,40);
    block13 = new Blocks(360,195,30,40);
    block14 = new Blocks(390,195,30,40);
    block15 = new Blocks(420,195,30,40);
    block16 = new Blocks(390,155,30,40);

    blocks1 = new Blocks(640,175,30,40);
    blocks2 = new Blocks(670,175,30,40);
    blocks3 = new Blocks(700,175,30,40);
    blocks4 = new Blocks(730,175,30,40);
    blocks5 = new Blocks(760,175,30,40);
    blocks6 = new Blocks(670,135,30,40);
    blocks7 = new Blocks(700,135,30,40);
    blocks8 = new Blocks(730,135,30,40);
    blocks9 = new Blocks(700,95,30,40);

     polygon = Bodies.circle(50,200,20);
     World.add(world, polygon);

    slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
    background(30)
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

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

    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();

    imageMode(CENTER);
    image(polygon_Img, polygon.position.x, polygon.position.y,40,40);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}