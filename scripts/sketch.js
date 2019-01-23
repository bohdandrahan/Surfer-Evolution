

let time = {current:0};
let circle;
let fourierPainter;
function setup() {
	width = 0.9 * windowWidth;
  let canvas = createCanvas(width, 400);
  canvas.parent('sketch-holder')

	let circle = new Circle(100,1,0, time)
	let circle2 = new Circle(10,10,0, time)
	fourierPainter = new FourierPainter([circle, circle2])
}

function draw() {
	scale(1)
	background(100);
	stroke(255);
	fourierPainter.display()
	time.current += 0.01

  // put drawing code here
}