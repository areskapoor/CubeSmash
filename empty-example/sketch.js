
let dY;
let dY01;
let dY02;
let dY03;

let sT;
let sT01;
let sT02;

let gravity = 1;
let friction = 0.9;
let p1;
let p2;


function setup() {
  createCanvas(1000, 800);
  p1 = new player(200,200,30,30,3,false,false,0,0,87,68,65)
  p2 = new player(200,200,30,30,3,false,false,0,0,UP_ARROW,39,37)
  //dynamic platforms below
  dY = new dynamicPlatform(50,100,random(0,255),random(.5,2),150,50)
  dY01 = new dynamicPlatform(300,300,random(0,255),random(.5,2),400,300)
  //static plaforms below
  sT = new staticPlatform(90,600,random(0,255))
  sT01 = new staticPlatform(500,600,random(0,255))
  sT02 = new staticPlatform(300,500,random(0,255))
}

function draw(){
background(255);
p1.drawMe();
p1.moveMe();
p2.drawMe();
p2.moveMe();
line(10,845,900,845);

	  dY.drawPlatform();
    dY.movePlatform();
	  dY01.drawPlatform();
    dY01.movePlatform();

    sT.drawPlatform();
    sT01.drawPlatform();
    sT02.drawPlatform();


}


class staticPlatform {
  constructor(x,y,color) {
    this.x = x
    this.y = y
    this.color = color
  }
  drawPlatform(){
    fill(this.color)
    rect(this.x,this.y,150,30)
  }
  }

class dynamicPlatform {

  constructor(x,y,color,speed,endParaX,startParaX) {
    this.x = x
    this.y = y
    this.color = color
    this.speed = speed
    this.endParaX = endParaX
    this.startParaX = startParaX
  }
  drawPlatform(){
    fill(this.color)
    rect(this.x,this.y,150,30)
  }
  movePlatform(){
    this.x += this.speed
    if (this.x >= this.endParaX){
      this.speed = -this.speed
    }
    else if (this.x <= this.startParaX) {
      this.speed = -this.speed
    }
  }
}
class player {
  //p1 = new player(200,200,30,30,3,false,false,0,0)
  constructor(x,y,w,h,speed,jumping,grounded,velocityX,velocityY,up,right,left){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.jumping = jumping;
    this.grounded = grounded;
    this.VelocityX = velocityX;
    this.VelocityY = velocityY;
    this.up = up;
    this.right = right;
    this.left = left;
  }



  drawMe(){
    rect(this.x,this.y,this.w,this.h,10);
  }
  moveMe(){
    print(this.VelocityY)

    if (keyIsDown(this.up)) {
    // w key
    if (this.jumping === false && this.grounded === true) {
        this.jumping = true;
        this.grounded = false;
        this.VelocityY = -20;//how high to jump
    }
}
if (keyIsDown(this.right)) {
    // d key
    if (this.VelocityX < this.speed) {
        this.VelocityX++;
    }
}
if (keyIsDown(this.left)) {
    // a key
    if (this.VelocityX > -this.speed) {
        this.VelocityX--;
    }
}
  if(this.grounded === true){
        this.VelocityY = 0;
   }
   else{
     this.VelocityY += gravity;
   }
   this.VelocityX *= friction;

   this.x += this.VelocityX;
   this.y += this.VelocityY;
   if(this.y >= 500){
     this.grounded = true;
     this.jumping = false;
   }

  }
}
