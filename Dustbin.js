class Dustbin {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
      this.width = width;
      this.height = height;
      
      this.dustbin=loadImage("Sprites/dustbin.png")
      World.add(world, this.body);
    }
    display(){
      image(this.dustbin,569,360)
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //fill("white");
      //stroke("white");
      //strokeWeight(4)
      this.dustbin.scale=0.5
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
