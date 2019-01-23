class Surfer{
	constructor(N = 100, circles = null){
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
		let newRadius = this.getNewRadius();
		let newFrequency = this.getNewFrequency();
		let newCircle = new Circle(newRadius, time, newFrequency);
		return newCircle;
	}
	getNewRadius(){
		return random(50)
	}
	getNewFrequency(){
			return this.circles.length + 1
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
}