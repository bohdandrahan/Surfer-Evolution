

let time = {current:0};
let circle;
let fourierPainter;
let height = 500;
function setup() {
	width = 0.9 * windowWidth;
  let canvas = createCanvas(width, height);
  canvas.parent('sketch-holder')

	// let circle = new Circle(100,1,0, time)
	// let circle2 = new Circle(50,2,0, time)
	// surfer = new Surfer([circle, circle2])
	surfer = new SquareWaveSurfer(40)
	fourierPainter = new FourierPainter(surfer, time, 200, height/2)
}

function draw() {
	background(200);
	stroke(255);
	fourierPainter.display()
	time.current += 0.03
}

function windowResized() {
  width = 0.9 * windowWidth;
  resizeCanvas(width, height);

  //Set width of controls
  // document.querySelector('.controls').style.width = width + "px";
}