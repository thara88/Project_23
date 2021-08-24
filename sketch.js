const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  pBase = new PlayerBase(300,random(450,height-300),180,150)
  cBase = new ComputerBase(width - 300, random(450,height-300),180,150);

  //Create Player and computerplayer
  player = new Player(285,pBase.body.position.y - 153,50,180);
  compPlayer = new ComputerPlayer(width - 285, cBase.body.position.y - 153, 50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   pBase.display();
   cBase.display();

   //display Player and computerplayer
   player.display();
   compPlayer.display();

}
