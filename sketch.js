
var dog , dogImg, dogImg1;
var database;
var foodS , foodStock ;

function preload()
{
	dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")

}

function setup() {
  database = firebase.database();
	createCanvas(500 , 500);
  dog = createSprite(250,350,10,10)
  dog.addImage(dogImg)
  dog.scale= 0.15 ; 

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  textSize(20)

}


function draw() {  
 background(46, 139, 87)

 if(keyWentDown (UP_ARROW) ) {
  writeStock(foodS)
 dog.addImage(dogImg1)
 
 }

 if(keyWentUp (UP_ARROW) ) {
 dog.addImage(dogImg)
 
 }
  drawSprites();
 
  fill(255,255,254)
  stroke("black")
  text("Food remaining:"+foodS, 170,200)
  textSize(13)
  text("Note: please press up arrow key to feed tommy ",130,10)

}

function readStock(data){

  foodS = data.val();

}

function writeStock(x){

  if(x <= 0){
    x = 0
  }
  else{
    x = x-1
  }

   database.ref('/').update({
     Food : x
   })
}







