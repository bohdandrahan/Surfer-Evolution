class FourierPainter{
	constructor(surfer, time, x = 200, y = 200){
		this.circles = this.sortedCircles(surfer.circles)
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
		if (this.wave.length > 900){
			this.wave.pop()
		}
	}
	getFrequency(index){
		if (index === 0){
			return 1
		} else{
			return (index * 2)
		}
	}
	display(){
		translate(this.position.x, this.position.y)
		ellipse(0,0, 10)
		this.point = createVector(0, 0)
		this.circles.forEach((circle, index) =>{
			circle.setFrequency(this.getFrequency(index))
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
		this.wave.forEach((y, x) =>{
			fill('red')
			ellipse(x + this.shift, y, 2);

		});
	}
}