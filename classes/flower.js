
class Flower {
  constructor(x, stem) {
    this.roots = 500;
    this.width = 10;
    this.x = x;
    this.bloomHeight = stem;
    this.timer = 0;
    this.color = random(360);
    this.saturation = random(75,100);
  }

  draw() {
    stroke(color(133, 54, 43));
    strokeWeight(3);
    fill(133, 54, 43);
    line(this.x, this.roots, this.x, this.bloomHeight);
    //make flower
    fill(this.color, this.saturation, 100, 75);
    noStroke();
    
    push();
    translate(this.x, this.bloomHeight);
    
    for (let i = 0; i < 18; i ++) { 
      ellipse(0, 15, 5, 20);
      rotate(20);
    }
    pop();
  }

  bloom() {
    stroke(color(133, 54, 43));
    strokeWeight(3);
    fill(133, 54, 43);

    //grow the flower in seconds
    let stem = map(second(), 0, 59, height, this.bloomHeight)
    line(this.x, this.roots, this.x, stem)
    
    if(stem == this.bloomHeight && second() == 59) {
      fill(this.color, this.saturation, 100, 75);
      noStroke();
      
      push();
      translate(this.x, this.bloomHeight);
      
      for (let i = 0; i < 10; i ++) { 
        ellipse(0, 15, 5, 20);
        rotate(15);
      }
      
      pop();
    }
    
  }   
}