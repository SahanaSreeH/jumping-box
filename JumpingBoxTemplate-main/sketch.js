var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   blueRect = createSprite(100,550,150,30);
   orangeRect = createSprite(300,550,150,30);
   pinkRect = createSprite(500,550,150,30);
   greenRect = createSprite(700,550,150,30); 

   blueRect.shapeColor = "blue";
   orangeRect.shapeColor = "orange";
   pinkRect.shapeColor = "pink";
   greenRect.shapeColor = "green";

   box = createSprite(random(20,750),35,35);
   box.shapeColor = "white";
   box.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
   
    createEdgeSprites();

    music.play();

if(blueRect.isTouching(box) && box.bounceOff(blueRect)){
    box.shapeColor = "blue";
    box.velocityY = 0;
    music.stop();
}

if(orangeRect.isTouching(box) && box.bounceOff(orangeRect)){
    box.shapeColor = "orange";
    box.velocityY = 0;
    music.stop();
}

if(pinkRect.isTouching(box) && box.bounceOff(pinkRect)){
    box.shapeColor = "pink";
    box.velocityY = 0;
    music.stop();
}

if(greenRect.isTouching(box) && box.bounceOff(greenRect)){
    box.shapeColor = "green";
    box.velocity = 0;
    music.stop();
}

   

drawSprites();

}

