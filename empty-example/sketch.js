

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



function preload() {

  yellow1 = loadAnimation('yellowGunSmash1.png');
  yellow2 = loadAnimation('yellowGunSmash2.png');
  red1 = loadAnimation('redGunSmash1.png')
  red2 = loadAnimation('redGunSmash2.png')

}

function setup() {
  createCanvas(1000, 800);
  p1 = new player(200,200,30,30,3,false,0,0,87,68,65,red1,red2,1)
  p2 = new player(200,200,30,30,3,false,0,0,UP_ARROW,39,37,yellow1,yellow2,1)
  //dynamic platforms below
  dY = new dynamicPlatform(50,100,random(0,255),random(.5,2),150,50,150)
  platforms.push(dY);
  dY01 = new dynamicPlatform(300,300,random(0,255),random(.5,2),400,300,150)
  platforms.push(dY01);
  //static plaforms below
  sT = new staticPlatform(90,600,random(0,255),150)
  platforms.push(sT);
  sT01 = new staticPlatform(500,600,random(0,255),150)
  platforms.push(sT01);
  sT02 = new staticPlatform(300,500,random(0,255),150)
  platforms.push(sT02);
  sT03 = new staticPlatform(700,0,230,1500,)
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

	  dY.drawPlatform();
    dY.movePlatform();
	  dY01.drawPlatform();
    dY01.movePlatform();

    sT.drawPlatform();
    sT01.drawPlatform();
    sT02.drawPlatform();


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
  constructor(x,y,w,h,speed,grounded,velocityX,velocityY,up,right,left,sprite,sprite2,direction){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    //this.jumping = jumping;
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
    // THE WORLD FORCES
    this.VelocityX *= friction;
    if(this.grounded == true){
      this.VelocityY = 0;
    }
    else if(this.grounded == false){
      this.VelocityY += gravity;
    }

   //THE CHARACTER CHANGING LOCATION
    this.x += this.VelocityX;
    this.y += this.VelocityY;

    //JUMP
    if (keyIsDown(this.up)) {
    // w key
    if (this.grounded === true) {
         print("I'm jumping")
        this.grounded = false;
        this.VelocityY = -20;//how high to jump
          this.y += this.VelocityY;
      }
    }

    //SLIDE RIGHT
    if (keyIsDown(this.right)) {
      this.direction = 2;
    // d key
        if (this.VelocityX < this.speed) {
            this.VelocityX++;
          }
        }
    //SLIDE LEFT
    if (keyIsDown(this.left)) {
      this.direction = 1;
    // a key
      if (this.VelocityX > -this.speed) {
        this.VelocityX--;
    }
  }

 //CHECK IF YOU'RE ON A PLATFORM
     if(this.x>=sT.x && this.x<=sT.x+sT.w && this.y>= sT.y-10){
       this.grounded = true;
     }

     else if(this.x>=sT01.x && this.x<=sT01.x+sT01.w && this.y>= sT01.y-10){
       this.grounded = true;
     }
     else if(this.x>=sT02.x && this.x<=sT02.x+sT02.w && this.y>= sT02.y-10){
       this.grounded = true;
     }

     else if(this.x>=sT03.x && this.x<=sT03.x+sT03.w && this.y>= sT03.y-10){
       this.grounded = true;
     }


     else{
       this.grounded = false;
     }



  }
}
