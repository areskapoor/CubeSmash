// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var ghost;
let me;
let yang;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  ghost = loadAnimation('tim/tim001.png', 'tim/tim008.png');

}



function setup() {
  createCanvas(800, 800);
  me = new Avatar(width/2, 300, 3);
  yang = new Avatar1(width/2, 300, 3);
}

function draw() {
  background(200, 255, 255);
  me.drawMe();
  me.moveMe();
  yang.drawMe();
  yang.moveMe();
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well




}
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	moveMe(){
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed+30;
    }
    if (keyIsDown(65)) { //if you hold the up arrow, move up by speed
       this.x -= this.speed+30;
    }
    if (keyIsDown(68)) { //if you hold the up arrow, move up by speed
       this.x += this.speed+30;
    }

    if (keyIsDown(83)) { // if you hold the down arrow, move down by speed
        this.y += this.speed+30;
    }
	}
  drawMe(){
    scale(.25)
    animation(ghost, this.x, this.y);
  }
  die(){

  }
}
class Avatar1 {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed+30;
    }
    if (keyIsDown(37)) { //if you hold the up arrow, move up by speed
       this.x -= this.speed+30;
    }
    if (keyIsDown(39)) { //if you hold the up arrow, move up by speed
       this.x += this.speed+30;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed+30;
    }
	}
  drawMe(){
    animation(ghost, this.x, this.y);
  }
  die(){

  }
}
