let hearts = [];
let message = "Happy 19th Anniversary, Jenn!\n\n\
My beloved wife, thank God for giving you to me,\n\
to love and cherish till death us do part.\n\
May we always be faithful to God and to each other.\n\
Love, Andy...";


function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.8);
  textAlign(CENTER, CENTER);
  fill(245, 10, 68);
  noStroke();

  // Create initial hearts
  for (let i = 0; i < 50; i++) {
    hearts.push(new Heart(random(width), random(height)));
  }
  

  
}

function draw() {
  background(255, 182, 193); // Light pink background

  // Draw floating hearts
  for (let heart of hearts) {
    heart.move();
    heart.display();
  }

  // Display the message
  textSize(14);
  fill(255,255,100);
  stroke(150, 0, 0);
  strokeWeight(2);
  text(message, width / 4, height / 2, width-120, height / 2);
  

}

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 30);
    this.speed = random(1, 3);
  }

  move() {
    this.y -= this.speed;
    if (this.y < -this.size) {
      this.y = height + this.size;
      this.x = random(width);
    }
  }

  display() {
    beginShape();
    vertex(this.x, this.y);
    bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
    bezierVertex(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
    endShape(CLOSE);
  }
}
