import { read } from './data.js'
import { write } from './data.js'

function main(list, pairs) {
	let indexCount = 0

	function incrementPair() {
		if (indexCount < pairs.length - 1) {
			indexCount++
		} else {
			finished()
		}
	}

	function getCurrentObj() {
		const pair = pairs[indexCount]
		const idOne = pair[0]
		const idTwo = pair[1]
		const one = list.find(toDo => toDo.id === idOne)
		const two = list.find(toDo => toDo.id === idTwo)
		return { one, two }
	}

	function incrementValue(obj) {
		obj.weight = obj.weight + 1
	}

	const buttonOne = document.getElementById('btn_one')
	const buttonTwo = document.getElementById('btn_two')

	function updateButtonTxt() {
		const current = getCurrentObj()
		const nameOne = current.one
		const nameTwo = current.two

		buttonOne.textContent = nameOne.name
		buttonTwo.textContent = nameTwo.name
	}

	function finished() {
		write('list', list)
		window.location.replace('finished.html')
	}

	buttonOne.addEventListener('click', () => {
		incrementValue(getCurrentObj().one)
		incrementPair()
		updateButtonTxt()
	})

	buttonTwo.addEventListener('click', () => {
		incrementValue(getCurrentObj().two)
		incrementPair()
		updateButtonTxt()
	})

	updateButtonTxt()
}

Promise.all([
	read('list'),
	read('pairs'),
]).then(([ list, pairs ]) => {
	main(list, pairs)
})
