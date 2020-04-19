
var Sun;

function setup() {
  createCanvas(1200,800);

  
  Sun = createSprite(800, 400, 50, 50);

  Mercury = new Planet(725, 400, 50);
  Venus = new Planet(650,400, 50);
  Earth = new Planet(575, 400, 50);
  Mars = new Planet(500, 400, 50);
  Jupiter = new Planet(425, 400, 50);
  Saturn = new Planet(350, 400, 50);
  Uranus  = new Planet(275, 400, 50);
  Neptune = new Planet(200, 400, 50);
  Shyam = new Planet(125, 400, 70);
}

function draw() {
  background(255,255,255);  

  text("Mercury", 700, 360);
  Mercury.display();

  text("Venus", 625, 360);
  Venus.display();

  text("Earth", 550, 360);
  Earth.display();

  text("Mars", 475, 360);
  Mars.display();

  text("Jupiter", 400, 360);
  Jupiter.display();

  text("Saturn", 325, 360);
  Saturn.display();

  text("Uranus", 250, 360);
  Uranus.display();

  text("Neptune", 175, 360);
  Neptune.display();

  text("Shyam", 100, 360);
  fill("blue");
  Shyam.display();

  Sun.width = Sun.width + 0.5;
  Sun.height = Sun.height + 0.5;

  drawSprites();
}