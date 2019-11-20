
let dY;
let dY01;
let dY02;
let dY03;

let sT;
let sT01;
let sT02;


function setup() {
  createCanvas(1000, 1000);
  //dynamic platforms below
  dY = new dynamicPlatform(50,100,random(0,255),random(.5,2),150,50)
  dY01 = new dynamicPlatform(300,300,random(0,255),random(.5,2),400,300)
  //static plaforms below
  sT = new staticPlatform(90,600,random(0,255))
  sT01 = new staticPlatform(500,600,random(0,255))
  sT02 = new staticPlatform(300,500,random(0,255))
}

function draw(){
background("white");


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
