
function setup() {
  createCanvas(400, 400);
  b = new player (200,200,0,0);

}

function draw() {
 print("velocityX =" + b.velocityX);
  print("velocityY =" + b.velocityY);
  b.moveme();
  b.drawme();

  // if (keyIsPressed){
  //   if (keyCode === 68){
  //     if (velocityX < 5){
  //     velocityX += 0.5;
  //   }
  // }}  else {
  //     if (velocityX > 0){
  //     velocityX -= 1
  //   }}
  //
  // if (keyIsPressed){
  //   if (keyCode === 65){
  //     if (velocityX > -5){
  //     velocityX -= 0.5;
  //   }
  // }} else {
  //     if (velocityX < 0){
  //     velocityX += 1
  //   }}


    //   if(b.x <= 40){
    //   if (keycode === 32){
    //
    //   }
    // }


  }



// function keyPressed(){
//
//   if (keyCode === 68){
//     if (velocityX < 5){
//     velocityX += 0.5;
//   }
//   }  else {
//     if (velocityX > 0){
//     velocityX -= 1
// }}
//
//
//   if (keyCode === 65){
//     if (velocityX > -5){
//     velocityX -= 0.5;
//   }
//   } else {
//     if (velocityX < 0){
//     velocityX += 1
// }}
//
//
// //   if(b.x <= 40){
// //   if (keycode === 32){
// //
// //   }
// // }
//
// }


class player {
  constructor(x,y,velocityX,velocityY){
   this.x = x;
    this.y = y;
    this.velocityX=velocityX;
    this.velocityY=velocityY;

  }
  drawme(){
    rect(this.x,this.y,50,50,20,20);
  }
  moveme(){
  this.y += this.velocityY;
  this.X += this.velocityX;
  if (keyIsPressed === true){
    if (keyCode === 68){
        if (this.velocityX < 5){
        this.velocityX += 0.5;
      }
    }}
        if (this.velocityX > 0){
        this.velocityX -= 1
      }

    if (keyIsPressed === true){
      if (keyCode === 65){
        if (this.velocityX > -5){
        this.velocityX -= 0.5;
      }
    }}
    if (keyIsPressed === false){
      if (this.velocityX > 0){
      this.velocityX -= 1
    }
        if (this.velocityX < 0){
        this.velocityX += 1
      }

  }
  }
}
