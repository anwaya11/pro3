const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    rubber1 = new RUBBER(500,100,20);

    iron1 = new Iron(400,200,60,60);

  box1 = new Box(700,100,100,70);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber1.display();
    iron1.display();

    box1.display();
    
 
}