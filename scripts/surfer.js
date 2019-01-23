class Surfer{
	constructor(circles = null, N = 100){
		if (circles){
			this.circles = circles
		}else{
			this.createCircles(N)
		}
	}
	createCircles(N){
		this.circles = []
		for(let i = 0; i < N; i++){
			this.circles.push(this.createNewCircle())
		}
	}
	createNewCircle(){
		let newRadius = random(50);
		let newCircle = new Circle(newRadius, 0, time);
		return newCircle;
	}
	getNewFrequency(){
		if (this.circles.length === 0){
			return 1
		} else{
			return (this.circles.length * 2)
		}
	}
}