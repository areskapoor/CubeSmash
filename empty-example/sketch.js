
let dY;
let dY01;
let dY02;
let dY03;

let sT;
let sT01;
let sT02;

let gravity = .8;
let friction = 0.9;
let p1;
let p2;

let platforms = [];

console.log(platforms.w)

function preload() {

  yellow1 = loadAnimation('yellowGunSmash1.png');
  yellow2 = loadAnimation('yellowGunSmash2.png');
  red1 = loadAnimation('redGunSmash1.png')
  red2 = loadAnimation('redGunSmash2.png')

}

function setup() {
  createCanvas(1440, 800);
  p1 = new player(200,200,30,30,3,false,false,0,0,87,68,65,red1,red2,1)
  p2 = new player(200,200,30,30,3,false,false,0,0,UP_ARROW,39,37,yellow1,yellow2,1)
  //dynamic platforms below
  // dY = new dynamicPlatform(50,100,random(0,255),random(.5,2),150,50,150)
  // platforms.push(dY);
  // dY01 = new dynamicPlatform(300,300,random(0,255),random(.5,2),400,300,150)
  // platforms.push(dY01);
  //static plaforms below
  sT = new staticPlatform(90,600,random(0,255),150)
  platforms.push(sT);
  sT01 = new staticPlatform(500,600,random(0,255),150)
  platforms.push(sT01);
  sT02 = new staticPlatform(300,500,random(0,255),150)
  platforms.push(sT02);
  sT03 = new staticPlatform(0,799,0,1000)
  platforms.push(sT03);
  frameRate(60);
}

function draw(){
background(255);
p1.drawMe();
p1.moveMe();
p2.drawMe();
p2.moveMe();
line(10,845,900,845);

	  // dY.drawPlatform();
    // dY.movePlatform();
	  // dY01.drawPlatform();
    // dY01.movePlatform();

    sT.drawPlatform();
    sT01.drawPlatform();
    sT02.drawPlatform();
    sT03.drawPlatform();


}


class staticPlatform {
  constructor(x,y,color,w,) {
    this.x = x
    this.y = y
    this.color = color
    this.w = w
  }
  drawPlatform(){
    fill(this.color)
    rect(this.x,this.y,this.w,30)
  }
  }

class dynamicPlatform {

  constructor(x,y,color,speed,endParaX,startParaX,w) {
    this.x = x
    this.y = y
    this.color = color
    this.speed = speed
    this.endParaX = endParaX
    this.startParaX = startParaX
    this.w = w
  }
  drawPlatform(){
    fill(this.color)
    rect(this.x,this.y,this.w,30)
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
  constructor(x,y,w,h,speed,jumping,grounded,velocityX,velocityY,up,right,left,sprite,sprite2,direction){
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
    this.sprite = sprite;
    this.sprite2 = sprite2;
    this.direction = direction;
  }



  drawMe(){
    if (this.direction === 1){
    animation(this.sprite, this.x, this.y)
    }
    if (this.direction === 2){
    animation(this.sprite2, this.x, this.y)
    }
  }
  moveMe(){


    if (keyIsDown(this.up)) {
    // w key
    if (this.jumping === false && this.grounded === true) {
        this.jumping = true;
        this.grounded = false;
        this.VelocityY = -20;//how high to jump
    }
}
if (keyIsDown(this.right)) {
    this.direction = 2;
    // d key
    if (this.VelocityX < this.speed) {
        this.VelocityX++;
    }
}
if (keyIsDown(this.left)) {
    this.direction = 1;
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

   for (let i = 0; i < platforms.length; i++){
     if(this.y > platforms[i].y-15 && this.x > platforms[i].x && this.x < platforms[i].x+platforms[i].w){
       //if(staticplatforms[i].x || staticplatforms[i].x > this.x > staticplatforms[i].x + 150 || staticplatforms[i].x){
       this.grounded = true;
       this.jumping = false;
       console.log("is grounded")

     }
<<<<<<< Updated upstream
     // else {
     //   this.grounded = false
     // }
     // if(this.x >= platforms[i].x + platforms[i].w && this.x <= platforms[i].x){
     //   this.grounded = false;
     //   console.log("not grounded")
     //   //code above tells the ball to fall with gravity when it's not on top of a platform
     // }
     // if(this.x >= platforms[i].x && this.x <= platforms[i].x + platforms[i].w && this.y <= platforms[i].y +30 && this.y >= platforms[i].y){
     //   this.grounded = false;
     //   this.VelocityY = 0;
     //   this.VelocityY += gravity;
     //   console.log("we bouncin")
     //   //code above allows ball to bounce in opposite y velocity when it collides with a platform
     // }
=======
     if(this.x >= platforms[i].x + platforms[i].w && this.x <= platforms[i].x){
       this.grounded = false;
       console.log("not grounded")
       //code above tells the ball to fall with gravity when it's not on top of a platform
     }
     if(this.x >= platforms[i].x && this.x <= platforms[i].x + platforms[i].w && this.y <= platforms[i].y + 30 && this.y >= platforms[i].y){
       this.grounded = false;
       this.VelocityY = 0;
       this.VelocityY += gravity;
       console.log("bouncing")
       //code above allows ball to bounce in opposite y velocity when it collides with a platform
     }
>>>>>>> Stashed changes
   }

   // if(this.y > staticPlatform.y){
   //   this.grounded = true;
   //   this.jumping = false;
   // }
   // if(this.y > 700){
   //   this.grounded = true;
   //   this.jumping = false;
   // }
  }
}
