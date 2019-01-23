class Circle{
	constructor(radius, time, frequency = null, offset = 0){
		this.radius = radius
		this.frequency = frequency
		this.time = time
		this.offset = offset
	}
	setFrequency(fq){
		this.frequency = fq

	}
	setPosition(point_){
		this.position = createVector(point_.x, point_.y)
	}
	calculatePoint(){
		let x = this.radius * cos(this.frequency*(this.time.current + this.offset)) + this.position.x;
		let y = this.radius * sin(this.frequency*(this.time.current + this.offset)) + this.position.y;
		this.point = createVector(x, y)

	}
	display(){
		colorMode(HSB)
		stroke(6*this.radius%355, 255, 255);
		strokeWeight(2)
		noFill();
		ellipse(this.position.x, this.position.y, this.radius*2)
		this.calculatePoint()
		line(this.position.x, this.position.y, this.point.x, this.point.y)
		colorMode(RGB)
	}
}