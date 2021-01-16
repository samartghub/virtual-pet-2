class Food{
    constructor(x, y){
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,options);
      this.image = loadImage("milk.png");
      World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        image.display();
    }

    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){
      
    }

  
  };
  