let velocityX=0;
let velocityY=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
 print("velocityX =" + velocityX);
  print("velocityY =" + velocityY);
  b = new player (200,200,0);
  b.drawme();
  b.moveme();

}

function keyPressed(){

  if (keyCode === 68){
    if (velocityX < 5){
    velocityX += 0.5;
  }
  }  else {
    if (velocityX > 0){
    velocityX -= 1
}}


  if (keyCode === 65){
    if (velocityX > -5){
    velocityX -= 0.5;
  }
  } else {
    if (velocityX < 0){
    velocityX += 1
}}


//   if(b.x <= 40){
//   if (keycode === 32){
//
//   }
// }

}


class player {
  constructor(x,y,speed){
   this.x = x;
    this.y = y;
    this.speed = speed;
  }
  drawme(){
    rect(this.x,this.y,50,50,20,20);
  }
  moveme(){
  this.y += velocityY;
  this.X += velocityX;

  }
}
