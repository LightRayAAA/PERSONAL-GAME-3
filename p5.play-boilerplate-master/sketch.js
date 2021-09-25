var qube, qubeRightImg, qubeLeftImg
var ground, groundImg
var enemy, enemyImg
var blaster, blasterRightImg, blasterLeftImg, blasterGroup
var direction = "right"

function preload() {
qubeRightImg = loadImage("images/playerRight.png")
qubeLeftImg = loadImage("images/playerLeft.png")
groundImg = loadImage("images/ground.png")
enemyImg = loadImage("images/enemy.png")
blasterRightImg = loadImage("images/blasterRight.png")
blasterLeftImg = loadImage("images/blasterLeft.png")
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 390, 50, 50);
  ground.addImage("grass", groundImg);
  ground.scale = 1.7;
  enemy = createSprite(650, 250, 50, 50);
  enemy.addImage("purpleqube", enemyImg);
  enemy.scale = 0.8;
  qube = createSprite(200, 250, 50, 50);
  qube.addImage("playerRight", qubeRightImg);
  qube.addImage("playerLeft", qubeLeftImg);
  qube.scale = 0.8;
  blaster = createSprite(260,250)
  blaster.addImage("blasterRight", blasterRightImg)
  blaster.addImage("blasterLeft", blasterLeftImg)
  blaster.scale = 0.8;
  blasterRightGroup = new Group()
  blasterLeftGroup = new Group()
}

function draw() {
background(173, 216, 230);  
blaster.depth = qube.depth
qube.depth += 1
if(keyDown(LEFT_ARROW)) {
qube.x = qube.x - 10
blaster.changeAnimation("blasterLeft")
blaster.x = qube.x - 50
/*blasterLeft()
blasterRightGroup.destroyEach();
direction = "left"*/
qube.changeAnimation("playerLeft")
}
if(keyDown(RIGHT_ARROW)) {
qube.x = qube.x + 10
blaster.x = qube.x + 50
blaster.changeAnimation("blasterRight")
/*blasterRight();
blasterLeftGroup.destroyEach();
direction = "right"*/
qube.changeAnimation("playerRight")
}
/*if(keyDown("2")){
blasterRight();
if(direction == "right"){
blasterRight();
}
else if(direction == "left"){
blasterLeft();
}
}*/
drawSprites();
}

/*function blasterRight() {
blaster = createSprite(260,250)
blaster.x = qube.x + 30
blaster.addImage("blasterRight", blasterRightImg)
blasterRightGroup.add(blaster)
}


function blasterLeft() {
blaster = createSprite(200,250)
blaster.x = qube.x - 30
blaster.addImage("blasterLeft", blasterLeftImg)
blasterLeftGroup.add(blaster)
}*/