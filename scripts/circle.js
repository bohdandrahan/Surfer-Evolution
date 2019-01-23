class Circle{
	constructor(radius, offset, time, frequency = null){
		this.radius = radius
		this.frequency = frequency
		this.offset = offset
		this.time = time
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
		stroke(3*this.radius%355, 255, 255);
		strokeWeight(2)
		noFill();
		ellipse(this.position.x, this.position.y, this.radius*2)
		this.calculatePoint()
		line(this.position.x, this.position.y, this.point.x, this.point.y)
		colorMode(RGB)
	}
}