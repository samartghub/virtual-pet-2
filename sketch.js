var dog,dogImage, dogImage2,happyDog, database, foodS, foodStock,milk,lastFed;
var food, addFood, addFoods, feed, feedDog;
var foodObj;

function preload()
{
  dogImage = loadImage("dogImg.png"); 
  dogImage2 = loadImage("dogImg1.png");
  milk = loadImage("milk.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(100,200,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.25;

  happyDog = createSprite(200,200,20,20);
  happyDog.addImage(dogImage2);
  happyDog.scale = 0.25;

  food = createSprite(200,200);
  food.addImage(milk);
  

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  feedPet = createButton("Feed the dog");
  feedPet.position(700,95);
  feedPet.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  foodObj = new Food(300,300)
  
}


function draw() {  
  background(46,139,87);
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dogImage(happyDog);
  }
  drawSprites();

  text("Stock of Food is: "+readStock);
  food.display();
  foodObj.display();

  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(){
  database.ref('/').update({
    Food:x 
  })
}

function addFood(){
  //if(){

  //}

}



