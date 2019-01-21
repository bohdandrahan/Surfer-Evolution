

let time = {current:0};
let circle;
let fourierPainter;
function setup() {
	let circle = new Circle(100,1,0, time)
	let circle2 = new Circle(10,10,0, time)
	fourierPainter = new FourierPainter([circle, circle2])
	createCanvas(window.innerWidth, window.innerHeight)
  // put setup code here
}

function draw() {
	background(100);
	stroke(255);
	fourierPainter.display()
	time.current += 0.01

  // put drawing code here
}