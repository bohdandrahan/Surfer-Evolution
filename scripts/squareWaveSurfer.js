class SquareWaveSurfer extends Surfer{
	getNewRadius(){
		let i = this.circles.length + 1
		let newRadius = 50 / (i*2 - 1)
		return newRadius
		}
	getNewFrequency(){
		let i = this.circles.length + 1
		let newFrequency = i*2 - 1
		return newFrequency
	}
}