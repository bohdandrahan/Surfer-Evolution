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

class SawtoothWaveSurfer extends Surfer {
	getNewRadius(){
		let i = this.circles.length + 1
		let newRadius = 50 / i
		return newRadius
		}
	getNewFrequency(){
		let i = this.circles.length + 1
		let newFrequency = i
		return newFrequency
	}
}

class TriangleWaveSurfer extends Surfer{
	getNewRadius(){
		let i = this.circles.length + 1
		let n = i * 2 - 1
		let newRadius = 50 * pow(-1, (n - 1)/2)/pow(n, 2)
		return newRadius
		}
	getNewFrequency(){
		let i = this.circles.length + 1
		let n = i * 2 - 1
		let newFrequency = n
		return newFrequency
	}
}