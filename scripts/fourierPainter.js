class FourierPainter{
	constructor(circles, time, x = 200, y = 200, scale = 1){
		this.circles = this.sortedCircles(circles)
		this.scale = scale
		this.position = createVector(x, y);
		this.wave = []
		this.point = createVector(0,0)
		this.shift = 200
	}
	sortedCircles(circles){
		circles.sort((a, b) =>{
			if (a.radius > b.radius){
				return -1
			} else if (a.radius > b.radius){
				return 1
			}else{
				return 0
			}
		});
		return circles
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
			ellipse(x + this.shift, y, 2);
		});
	}
}