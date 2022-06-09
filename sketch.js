var suelo;
var imgSuelo;
var aguila,aguilaImg
var bg,bgImg
var cazador,cazadorImg
var sueloInv;
var obsGrupo,obsGrupoImg,cactus;

function preload(){
//imgSuelo=loadImage("imagen3.png");
aguilaImg=loadImage("aguila.png")
bgImg=loadImage("images (9).jpg")
cazadorImg=loadImage("cazador.png")
obsGrupoImg=loadImage("obstacle1.png")
}


function setup() {

  createCanvas(1000,500);


  bg=createSprite(400,160,1400,900)
  bg.scale=4;
  bg.addImage(bgImg);


cazador=createSprite(100,494)
cazador.addImage(cazadorImg);
cazador.scale=0.8



aguila=createSprite(300,100)
aguila.addImage(aguilaImg);
aguila.scale=0.7
fill("red")
sueloInv=createSprite(300,530,1000,10)

//ueloInv.visible=false;

obsGrupo=createGroup();
}




function draw() {
  background(180);  
//bg.velocityX=3;
cazador.velocityY=cazador.velocityY+3;
cazador.collide(sueloInv);
if(keyDown("space")){
cazador.velocityY=-27;
}
/*if(obsGrupo.isTouching(cazador)){

}*/
//aqui perder


spawnObstacles();
  drawSprites();
  
}

function spawnObstacles(){

if(frameCount%60===0){
cactus=createSprite(100,430,50,50);
cactus.x=Math.round(random(400,600));
cactus.addImage(obsGrupoImg);
cactus.scale=1.7
cactus.velocityX=-3;
cactus.lifetime=200;
obsGrupo.add(cactus);
cactus.depth=cazador.depth;
cazador.depth=cazador.depth+1;
}


}
