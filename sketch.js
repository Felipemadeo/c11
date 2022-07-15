var barco,barco1, sea,seaImg;
var chao;
function preload () {
seaImg = loadImage("sea.png");
barco1 = loadAnimation ("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
}
    function setup() {
   
        createCanvas (2000,650);

sea = createSprite (300,195,600,20);
sea.addImage ("sea", seaImg);
sea.x = sea.width/2 ;
barco = createSprite (200,480,20,20);
barco.addAnimation ("barco", barco1);
barco.scale = 0.5;
chao = createSprite (100,195,6000000000,10);
chao.visible = false
   }
function draw () {
    background (200)
    
    barco.collide (chao)
    sea.velocityX = -5 ;
    if (sea.x < 50){
        sea.x = sea.width/2 ;
    }
 
   
drawSprites ();
}