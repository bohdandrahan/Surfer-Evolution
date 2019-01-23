

let time = {current:0};
let circle;
let fourierPainter;
let height = 500;
function setup() {
	width = 0.9 * windowWidth;
  let canvas = createCanvas(width, height);
  canvas.parent('sketch-holder')

	surfer = new Surfer(10)
	surfer = new SquareWaveSurfer(10)
	surfer = new SawtoothWaveSurfer(100)
	surfer = new TriangleWaveSurfer(2)

	
	fourierPainter = new FourierPainter(surfer, time, 200, height/2)
}

function draw() {
	background(200);
	stroke(255);
	fourierPainter.display()
	time.current += 0.05
}

function windowResized() {
  width = 0.9 * windowWidth;
  resizeCanvas(width, height);

  //Set width of controls
  // document.querySelector('.controls').style.width = width + "px";
}