var garoto, garotoimagem
var chao, chaoimagem
var bloqueioD
var bloqueioE

function preload(){
  //imagens pré-carregadas
  garotoimagem = loadAnimation("Runner-1.png","Runner-2.png");
  chaoimagem = loadImage('path.png')
}

function setup(){
  createCanvas(300,700);
  //crie sprite aqui
  chao = createSprite(150,350)
  chao.addImage(chaoimagem)

  //criando menino correndo
garoto = createSprite(70,580,20,20);
garoto.addAnimation('garoto',garotoimagem);
garoto.scale=0.08;

bloqueioE = createSprite(10,350,20,700)
bloqueioE.visible = false
bloqueioD = createSprite(290,350,20,700)
bloqueioD.visible = false
}


function draw() {
  background(0);
  drawSprites()

  garoto.x = World.mouseX;

  chao.velocityY = 5
  if(chao.y > 400 ){
    chao.y = height/2;
  }

  garoto.collide(bloqueioE)
  garoto.collide(bloqueioD)
}
