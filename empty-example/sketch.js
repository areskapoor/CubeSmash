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
let bullets = [];
let bullets1 = [];
let p2bullets = [];
let b;
let t;
let firerate = 0;

function preload() {

  yellow1 = loadAnimation('yellowGunSmash1.png');
  yellow2 = loadAnimation('yellowGunSmash2.png');
  red1 = loadAnimation('redGunSmash1.png')
  red2 = loadAnimation('redGunSmash2.png')

}

function setup() {
  createCanvas(1200, 820);
  p1 = new player(180,500,30,30,3,false,0,0,87,68,65,red1,red2,1)
  p2 = new player(950,500,30,30,3,false,0,0,UP_ARROW,39,37,yellow1,yellow2,1)
  //dynamic platforms below
  dY = new dynamicPlatform(90,190,"black",random(.5,2),190,90,150)
  platforms.push(dY);
  dY01 = new dynamicPlatform(430,300,"black",random(.5,2),600,400,150)
  platforms.push(dY01);
  dY02 = new dynamicPlatform(900,190,"black",random(-.5,-2),900,800,150)
  platforms.push(dY02);
  //static plaforms below
  sT = new staticPlatform(90,600,"black",150,15)
  platforms.push(sT);
  sT01 = new staticPlatform(900,600,"black",150,15)
  platforms.push(sT01);
  sT02 = new staticPlatform(300,470,"black",150,15)
  platforms.push(sT02);
  sT04 = new staticPlatform(700,470,"black",150,15)
  platforms.push(sT04);
  sT05 = new staticPlatform(480,700,"black",150,15)
  platforms.push(sT05);
  sT03 = new staticPlatform(0,790,"black",1300,30)
  platforms.push(sT03);

  redHealth = new healthbar(80,50,200,25,"red",10)
  yellowHealth = new healthbar(930,50,200,25,"yellow",10)
  frameRate(60);
}


function draw(){

  background(255);
  if(frameCount <= 500){
    textSize(52);
    text("Welcome To GunSmash",350, 400)
  }
  if(frameCount <= 500 && frameCount >= 120){
    textSize(25);
    text("Red Player Is Controlled By W,A,D And Uses 'SPACE' To Shoot",250, 200)
    text("Yellow Player Is Controlled By Up,Left And Right Arrow, And Uses '.' To Shoot",250, 500)
  }

  if(frameCount >= 500){
  p1.drawMe();
  p1.moveMe();
  p2.drawMe();
  p2.moveMe();
  line(10,845,900,845);

	  dY.drawPlatform();
    dY.movePlatform();
	  dY01.drawPlatform();
    dY01.movePlatform();
    dY02.drawPlatform();
    dY02.movePlatform();

    sT.drawPlatform();
    sT01.drawPlatform();
    sT02.drawPlatform();
    sT03.drawPlatform();
    sT04.drawPlatform();
    sT05.drawPlatform();

    redHealth.changeHealth();
    yellowHealth.changeHealth();

  for(let i =0; i<bullets.length;i++){
    bullets[i].drawbullet();
    bullets[i].shoot();
    bullets[i].ballCollisions();
  }
  for(let t =0; t<bullets1.length;t++){
    bullets1[t].drawbullet();
    bullets1[t].shoot();
    bullets1[t].ballCollisions();
  }
  if (redHealth.health <= 0) {
    fill("yellow")
    textSize(40);
    text("Yellow Has Won",500,400)
    p1.x = 50000000
  }
  if (yellowHealth.health <= 0) {
    fill("red")
    textSize(40);
    text("Red Has Won",500,400)
    p2.x=50000000
  }
}
}

function keyPressed(){
  if (keyCode === 32){
    b = new bullet1(p1.x,p1.y,p1.direction,"grey",false)
       bullets1.push(b);
  }
  if (keyCode === 190){
    t = new bullet(p2.x,p2.y,p2.direction,"grey",false)
       bullets.push(t);
  }
}


class bullet1{
  constructor(x,y,direction,color,hasHit){
    this.x = x
    this.y = y
    this.direction = direction;
    this.aimcone = random(-0.7,0.7);
    this.color = color
    this.hasHit = hasHit
    //this.posOrNeg = posOrNeg
  }

  drawbullet(){
    fill(this.color)
    ellipse(this.x,this.y,8,5);

  }

  shoot(){

    if (this.direction === 1){
    this.x -= 9;
    // this.posOrNeg = -1
  }
    if (this.direction === 2){
      this.x +=9
      // this.posOrNeg = 1

    }
    this.y += this.aimcone;
  }
  ballCollisions(){
    if (this.x >= p2.x-15 && this.x <= p2.x+15 && this.y > p2.y-15 && this.y < p2.y+15 && this.hasHit==false){
        //make it dissapear
        this.hasHit = true
        yellowHealth.health = yellowHealth.health-1
        this.x = -900000000;
  }
}

}
class bullet{
  constructor(x,y,direction,color,hasHit){
    this.x = x
    this.y = y
    this.direction = direction;
    this.aimcone = random(-0.7,0.7);
    this.color = color
    this.hasHit = hasHit
    //this.posOrNeg = posOrNeg
  }

  drawbullet(){
    fill(this.color)
    ellipse(this.x,this.y,8,5);

  }

  shoot(){

    if (this.direction === 1){
    this.x -= 9;
    // this.posOrNeg = -1
  }
    if (this.direction === 2){
      this.x +=9
      // this.posOrNeg = 1

    }
    this.y += this.aimcone;
  }
  ballCollisions(){
  if (this.x >= p1.x-15 && this.x <= p1.x+15 && this.y > p1.y-15 && this.y < p1.y+15 && this.hasHit==false){
      //make it dissapear
      this.hasHit = true
      redHealth.health = redHealth.health-1
        this.x = -10000000
}

}
}

class staticPlatform {
  constructor(x,y,color,w,h) {
    this.x = x
    this.y = y
    this.color = color
    this.w = w
    this.h = h
  }
  drawPlatform(){
    noStroke()
    fill(this.color)
    rect(this.x,this.y,this.w,this.h)
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
    noStroke()
    fill(this.color)
    rect(this.x,this.y,this.w,15)
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
     if(this.x>=sT.x && this.x<=sT.x+sT.w && this.y>= sT.y-15 && this.y<= sT.y){
       this.grounded = true;
       // if (this.y <= sT.y){
         this.y = sT.y-15
       // }
     }

     else if(this.x>=sT01.x && this.x<=sT01.x+sT01.w && this.y>= sT01.y-15 && this.y<= sT01.y){
       this.grounded = true;
       // if (this.y <= sT01.y){
         this.y = sT01.y-15
       // }
     }
     else if(this.x>=sT02.x && this.x<=sT02.x+sT02.w && this.y>= sT02.y-15 && this.y<= sT02.y){
       this.grounded = true;
       // if (this.y <= sT02.y){
         this.y = sT02.y-15
       // }
     }

     else if(this.x>=sT03.x && this.x<=sT03.x+sT03.w && this.y>= sT03.y-30 && this.y<= sT03.y){
       this.grounded = true;
       // if (this.y <= sT03.y){
         this.y = sT03.y-15
       // }
     }
     else if(this.x>=sT04.x && this.x<=sT04.x+sT04.w && this.y>= sT04.y-30 && this.y<= sT04.y){
       this.grounded = true;
       // if (this.y <= sT03.y){
         this.y = sT04.y-15
       // }
     }
     else if(this.x>=sT05.x && this.x<=sT05.x+sT05.w && this.y>= sT05.y-30 && this.y<= sT05.y){
       this.grounded = true;
       // if (this.y <= sT03.y){
         this.y = sT05.y-15
       // }
     }
     else if(this.x>=dY.x && this.x<=dY.x+dY.w && this.y>= dY.y-15 && this.y<= dY.y){
       this.grounded = true;
       // if (this.y <= dY.y){
         this.y = dY.y-15
       // }
     }
     else if(this.x>=dY01.x && this.x<=dY01.x+dY01.w && this.y>= dY01.y-15 && this.y<= dY01.y){
       this.grounded = true;
       // if (this.y <= dY.y){
         this.y = dY01.y-15
       // }
     }
     else if(this.x>=dY02.x && this.x<=dY02.x+dY01.w && this.y>= dY02.y-15 && this.y<= dY02.y){
       this.grounded = true;
       // if (this.y <= dY.y){
         this.y = dY02.y-15
       // }
     }


     else{
       this.grounded = false;
     }



  }
}

class healthbar {
  constructor(x,y,w,h,color,health) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    this.health = health
  }
  changeHealth() {
    if (this.health == 10) {
      fill(this.color)
      rect(this.x,this.y,200, this.h)
    }
    else if (this.health < 10 && this.health >= 9){
      fill(this.color)
      rect(this.x, this.y,180,this.h)
    }
    else if (this.health < 9 && this.health >= 8){
      fill(this.color)
      rect(this.x, this.y,160,this.h)
    }
    else if (this.health < 8 && this.health >= 7){
      fill(this.color)
      rect(this.x, this.y,140,this.h)
    }
    else if (this.health < 7 && this.health >= 6){
      fill(this.color)
      rect(this.x, this.y,120,this.h)
    }
    else if (this.health < 6 && this.health >= 5){
      fill(this.color)
      rect(this.x, this.y,100,this.h)
    }
    else if (this.health < 5 && this.health >= 4){
      fill(this.color)
      rect(this.x, this.y,80,this.h)
    }
    else if (this.health < 4 && this.health >= 3){
      fill(this.color)
      rect(this.x, this.y,60,this.h)
    }
    else if (this.health < 3 && this.health >= 2){
      fill(this.color)
      rect(this.x, this.y,40,this.h)
    }
    else if (this.health < 2 && this.health >= 1){
      fill(this.color)
      rect(this.x, this.y,20,this.h)
    }
    else if (this.health < 1){
      fill(this.color)
      rect(this.x, this.y,0,this.h)
    }
    else if (this.health < 0){
      fill(this.color)
      this.health = 0
      rect(this.x, this.y,0,this.h)
    }
  }
}
