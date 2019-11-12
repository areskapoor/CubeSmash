//create an empty array called balls
let balls = [];
let collisionNum = 0
let grammar = "balls"
//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 8);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();
  if (collisionNum <=1) {
    grammar = "ball"
  }
  else if (collisionNum >= 2){
    grammar = "balls"
  }
  collisions = "You Have Hit " + collisionNum + " " + grammar
  noStroke()
  fill(50)
  text(collisions,50,50);

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3,false);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed-1;
    }

    if (keyIsDown(83)) { // if you hold the down arrow, move down by speed
        this.y += this.speed-1;
    }
    if (keyIsDown(68)) {
        this.x += this.speed-1;
    }
    if (keyIsDown(65)) {
        this.x -= this.speed-1;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed,hasHit){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hasHit = hasHit
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40 && this.hasHit==false){
      			this.speed = -this.speed;
            this.hasHit = true
            collisionNum = collisionNum + 1
            console.log("collision has occured")
    		}
  	}

}
