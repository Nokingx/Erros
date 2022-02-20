const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;
var engine, world;
var ground, ball;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;

var corda;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,600,1200,20,ground_options);
    World.add(world,ground);

    ball=new Ball(200,200,80,80);

    console.log(ground);
    b1=new Box(900,100,70,70);
    b2=new Box(900,100,70,70);
    b3=new Box(900,100,70,70);
    b4=new Box(900,100,70,70);
    b5=new Box(900,100,70,70);
    b6=new Box(900,100,70,70);
    b7=new Box(800,100,70,70);
    b8=new Box(800,100,70,70);
    b9=new Box(800,100,70,70);
    b10=new Box(800,100,70,70);
    b11=new Box(800,100,70,70);
    b12=new Box(800,100,70,70);
    b13=new Box(700,100,70,70);
    b14=new Box(700,100,70,70);
    b15=new Box(700,100,70,70);
    b16=new Box(700,100,70,70);
    b17=new Box(700,100,70,70);
    b18=new Box(700,100,70,70);
    b19=new Box(700,100,70,70);
    b20=new Box(700,100,70,70);

    corda-new Corda(ball.body,{x:500,y:50});

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);

    ball.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    
    corda.display();

}