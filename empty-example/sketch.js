

let b;
let anotherBall;
let jffsdff;

let jdflsf;
let fjdlkasklsa;
let fklsdfjfwkrfwdfasfdffsdfasfasdfewfrewfsdfsdfs;

function setup() {
  createCanvas(600, 600);

  b = new beaches(0,100,"red")
  anotherBall = new beaches (200,20,"green")
  jffsdff = new beaches (300,20,"black")
}

function draw(){
	background(220,100,200);
  text("hello",30,30);
  b.drawBall();
  b.moveBall();
  anotherBall.drawBall();

}


class beaches {
  constructor(x,y,color) {
    this.x = x
    this.y = y
    this.color = color
  }
  drawBall(){
    stroke(0)
    fill(this.color)
    ellipse(this.x,this.y,10,10)
  }
  moveBall(){
    this.x = this.x+2
    this.y = this.y+.5
  }

}
class sand {

  constructor(x,y,color) {
  this.x = x
  this.y = y
  this.color = color
  }

}
