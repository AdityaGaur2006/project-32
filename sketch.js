const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block;
var score=0;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine =Engine.create();
    World = engine.World;
// level one 
block1=new Ground(330,275,30,40);
block2=new Ground(360,275,30,40);
block3=new Ground(390,275,30,40);
block4=new Ground(420,275,30,40);
block5=new Ground(450,275,30,40);
block6=new Ground(480,275,30,40);
block7=new Ground(510,275,30,40);
// level two
block8=new Ground(330,235,30,40);
block9=new Ground(360,235,30,40);
block10=new Ground(390,235,30,40);
block11=new Ground(420,235,30,40);
block12=new Ground(450,235,30,40);
// level three 
block13=new Ground(360,195,30,40);
block14=new Ground(390,195,30,40);
block15=new Ground(420,195,30,40);
// level four 
block16=new Ground(390,155,30,40);
 // polygon
 polygon=bodies.circle(50,200,20);
 World.add(world,polygon);

 slingshot=new SlingShot(this.polygon,{x:100,y:200});


}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    fill("white");
    text("Score"+score,750,40)
    //strokeWeight(4);
    
    

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
     drawSprites();

    

}
function keyPressed() {
    if (keyCode===32) {
      //  slingshot.attach(this.polygon);
    }
}

async function getTime () {
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJson=await response.json();
    var datetime=responseJson.datetime;
    var hours=datetime.slice(11,13)
    if (hours>=06 && hours<=6)
    {
        bg="sprites/bg.png";
    }
    else{
        bg="sprites/bg2.png";
    }
    backgroundImg=loadImage(bg);
    console.log(responseJson);
}
    



