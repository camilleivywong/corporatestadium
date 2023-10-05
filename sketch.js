// image needs to be a class so it knows it's position
// create grid
// make mouse click function


let cols = 5;
let rows = 3; 

let stadium = [];
let newStadium = [];

let aporee = [];
let soundIndex = 0;

function preload(){
  for (let i = 0; i < 500; i++){
    newStadium[i] = loadImage('images/img' + i + '.jpg');
  }
  for (let i = 0; i < 12; i++){
    aporee[i] = loadSound('aporee/' + i + '.mp3');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let imageWidth = width/cols;
  let imageHeight = height/rows; 

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      let x = imageWidth;       // x position
      let y = imageHeight;      // y position
      let w = imageWidth;       // image width
      let h = imageHeight;      // image height
      let s = random(newStadium);
      let b = new Stadium(col * x, row * y, w, h, s);
      stadium.push(b);
    }
  } 
}


function mousePressed(){
  for (let i = 0; i < stadium.length; i++){
    stadium[i].clicked(mouseX, mouseY);
  }
  playSound();
}

function playSound(){
  console.log(soundIndex);
   if (soundIndex <= aporee.length){
    let randAporee = random(aporee);
    soundIndex++;
    // newAporee.onended(playSound);
    randAporee.play();
  }
}  

function draw() {
  for (let i = 0; i < stadium.length; i++){
    stadium[i].render();
  }
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
