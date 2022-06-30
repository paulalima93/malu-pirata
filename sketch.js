const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var cannonBall;

var balls = [];
var boats = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angleMode(DEGREES);
  angle = 20;
  cannon = new Cannon(180, 110, 100,100, angle);
 
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  cannon.display();
  //cannonBall.display();
  showBoats();

  for(var i=0; i<balls.length; i++){
    showCannonBalls(balls[i]);
  }

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}

function keyReleased(){
  if(keyCode === DOWN_ARROW || keyCode === 32){
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if (keyCode === DOWN_ARROW || keyCode === 32) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball, i){
  if(ball){
    ball.display();
  }
}


function showBoats(){
  if (boats.length > 0) {
    if (boats[boats.length-1].boat.position.x < width -300) {
      var postions = [-40 , -60, -70, -20];
      var position = random(postions);

      var boat = new Boat(width, height - 60, 170,170, position);
      boats.push(boat);
    }

    for (let i = 0; i < boats.length; i++) {
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].boat, {x: -1, y:0});
        boats[i].display();
      }  
    }

  } else {
    var boat = new Boat(width, height - 60, 170,170, -60);
    boats.push(boat);
  }
}
