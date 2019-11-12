
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background("black");

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(random(0,700),random(0,300),random(-5,5),random(-5,5));
  balls.push(b);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,speedx,speedy){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.speedx = speedx;
        this.speedy = speedy;
	}

	drawBall(){  // draw a ball on the screen at x,y
        noStroke();
    		fill(random(0,255),random(0,255),random(0,255));
		    ellipse(this.x,this.y,70,70);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.speedx;
		this.y = this.y+this.speedy;
	}


}
