const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    
  }


  var base_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

base = Bodies.rectangle(200,100,200,20,base_options);
World.add(world,base);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : base,
  stiffness: 0.05,
  length : 65
}
var chain = Constraint.create(options);
World.add(world,chain);

}


function draw() {
  background(0); 
  Engine.update(engine);


  fill ("brown");
rectMode(CENTER);
rect(base.position.x,base.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,base.position.x,base.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}






}