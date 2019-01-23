class FourierPainter{
	constructor(surfer, time, x = 200, y = 200){
		this.circles = surfer.circles
		this.position = createVector(x, y);
		this.wave = []
		this.point = createVector(0,0)
		this.shift = 200
		this.time = time
	}

	updateWave(){
		this.wave.unshift(this.point.y);
		if (this.wave.length > 900){
			this.wave.pop()
		}
	}
	display(){
		translate(this.position.x, this.position.y)
		this.point = createVector(0, 0)
		this.circles.forEach((circle, index) =>{
			circle.setPosition(this.point);
			circle.display();
			this.point = circle.point
		});
		noStroke();
		fill('red');
		ellipse(this.point.x, this.point.y, 5)
		this.updateWave()
		this.displayWave()
		stroke(255)
		strokeWeight(1)
		line(this.point.x, this.point.y, this.shift, this.point.y)
	}
	displayWave(){
		beginShape();
		noFill()
		stroke(0)
		this.wave.forEach((y, x) =>{
			vertex(x + this.shift, y);
		});
		endShape();
	}
}