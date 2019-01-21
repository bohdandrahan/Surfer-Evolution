class FourierPainter{
	constructor(circles, time, x = 200, y = 200, scale = 1){
		this.n = circles.length
		this.circles = circles
		this.scale = scale
		this.position = createVector(x, y);
		this.wave = []
		this.point = createVector(0,0)
		this.shift = 200
	}
	updateWave(){
		this.wave.unshift(this.point.y);
		if (this.wave.length > 700){
			this.wave.pop()
		}

	}
	display(){
		translate(this.position.x, this.position.y)
		this.point = createVector(0, 0)
		this.circles.forEach((circle) =>{
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
		line(this.point.x, this.point.y, this.shift, this.point.y)
	}
	displayWave(){
		this.wave.forEach((y, x) =>{
			stroke(255,0,0)
			point(x + this.shift, y);
		});
	}
}