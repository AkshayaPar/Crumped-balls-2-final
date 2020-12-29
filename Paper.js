/*class Paper{
	constructor(x,y,radius){
		var options={
			isStatic:false,
			restitution:0.04,
			friction:0.5,
			density:1.2
	}

	this.paper=loadImage("sprites/paper.png")
		this.x=x;
		this.y=y;
		this.radius=70
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
		World.add(world, this.body);
  }

  display(){
image(this.paper, 50, 350)
  var pos=this.body.position;		
  push()
	translate(pos.x, pos.y);
	ellipseMode(CENTER)
	fill(255,0,255);
	stroke("orange");
	strokeWeight(3);
	ellipse(0,0,this.radius, this.radius);
	pop()		
	}

}*/

/*class Paper {

	constructor(x, y, radius) {
  
	  var options = {
		  isStatic:false,
		  restitution:0.3,
		  friction:0,
		  density:1.2
		}
  
	 this.radius = radius
	 this.image=loadImage("paper.png");
	 this.body=Bodies.circle(x,y, (this.radius)/2, options)     
	  World.add(world, this.body);
	}
  
	display(){
	  
	  var pos =this.body.position;
	 
	  push()
	  translate(pos.x, pos.y);
	  rectMode(CENTER);
  
	  imageMode(CENTER);
	  image(this.image,0,0,this.radius,this.radius);
	  pop()
	}
   };*/

   class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage("Sprites/paper.png");
        World.add(world,this.body);

    }

        display()   {
		//image(this.paper, 50, 100 )
            push()
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,70,70);
            pop();
        }

}
