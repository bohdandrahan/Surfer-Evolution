class Circle{
	constructor(radius, frequency, offset, time){
		this.radius = radius
		this.frequency = frequency
		this.offset = offset
		this.time = time
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
		stroke(255);
		noFill();
		ellipse(this.position.x, this.position.y, this.radius*2)
		this.calculatePoint()
		line(this.position.x, this.position.y, this.point.x, this.point.y)
	}
}