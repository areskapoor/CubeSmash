let VelocityX = 0;
let VelocityY = 0;
let gravity = 5;
let friction = 0.9;
let p1;
let p2;


function setup() {
  createCanvas(1000, 1000);
  p1 = new player(200,200,30,30,3,false,false)
  line(10,800,900,800);
}

function draw() {
  p1.drawMe();
  p1.moveMe();
}







class player {
  constructor(x,y,w,h,speed,jumping,grounded){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.jumping = jumping;
    this.grounded = grounded;
  }



  drawMe(){
    rect(this.x,this.y,this.w,this.h,10);
  }
  moveMe(){
    if (keyIsPressed === true && keyCode === 32) {
    // up arrow or space
    if (this.jumping === false && this.grounded === false) {
        this.jumping = true;
        this.grounded = false;
        this.VelocityY = -player.speed * 2.5;//how high to jump
    }
}
if (keyIsPressed === true && keyCode === 68) {
    // right arrow
    if (this.VelocityX < this.speed) {
        this.VelocityX++;
    }
}
if (keyIsPressed === true && keyCode === 65) {
    // left arrow
    if (this.VelocityX > -this.speed) {
        this.VelocityX--;
    }
}
  if(this.grounded === true){
        this.VelocityY = 0;
   }
   this.VelocityX *= friction;
   this.VeloctityY += gravity;
   this.x += this.VelocityX;
   this.y += this.VelocityY;
   if(this.y >= 799){
     this.grounded = true;
   }

  }
}
