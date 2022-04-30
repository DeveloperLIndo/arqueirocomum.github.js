const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

var corpo, cabeca;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  var options={
    isStatic:true
  }
  //criar corpo do jogador
  corpo=Bodies.rectangle(200, 300, 180, 150, options);
  World.add(world, corpo);
  cabeca=Bodies.rectangle(200, corpo.position.y-160, 50,180, options);
  World.add(world, cabeca);

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image
  image(baseimage,corpo.position.x, corpo.position.y, 180, 150);
  image(playerimage,corpo.position.x, corpo.position.y, 180, 150);

  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
