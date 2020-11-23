const Engine = Matter.Engine;   
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world
  
  ground = new Ground(width/2, 770, width, 20)

  //DIVISIONS
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, 473, 10, divisionHeight));
    
   }
 
   

   //PLINKOS
  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 75))
  }
  
  
  for (var j = 15; j <= width - 10; j=j+50){
    plinkos.push(new Plinko(j, 175))
  }

  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 275))
  }
  
  
  for (var j = 15; j <= width - 10; j=j+50){
    plinkos.push(new Plinko(j, 375))
  }

  

  


}
 

function draw() {
  background(0);  
  ground.display();
  Engine.update(engine);

  if(frameCount % 20 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }


//PARTICLES

for(var k = 0; k < particles.length; k++){
  particles[k].display();
}

//plinkos
for(var k = 0; k < plinkos.length; k++){
  plinkos[k].display();
}

  
  //  console.log(frameCount);
}





















