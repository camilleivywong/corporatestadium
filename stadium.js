
//create stadium class with parameters at a certain position (posX, posY)
//insert class inside an array 
//render it and use matrix to push it into position

class Stadium {
	constructor(x, y, w, h, img) {
	  this.x = x;
	  this.y = y;
	  this.w = w;
	  this.h = h;
	  this.stadium = img;
	}
  
	clicked(px, py) {
	  if ((px > this.x ) && (px < this.x + this.w) && 
	  		(py > this.y) && (py < this.y + this.h)) {
		this.stadium = random(newStadium);
	  }
	}
  
	render() {
	  image(this.stadium, this.x, this.y, this.w, this.h);
	}
  }