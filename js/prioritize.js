import { read } from './data.js'

function main(list, pairs) { 
	let pairCount = 0

	function incrementPair() {
		if (pairCount < pairs.length) {
			pairCount++
		}
	}

	function getCurrentObj() {
		const pair = pairs[pairCount]
		const nameOne = pair[0]
		const nameTwo = pair[1]
		const one = list.find(toDo => toDo.name === nameOne)
		const two = list.find(toDo => toDo.name === nameTwo)
		return {one, two}
	}

	function incrementValue(obj) {
		obj.weight = obj.weight + 1
	}

	function toggleModal() {
		document.querySelector('.modal').classList.toggle('modal--hidden')
		document.querySelector('.overlay').classList.toggle('overlay--hidden')
	}

	const prioritizeBtn = document.getElementById('prioritize_btn')
	const buttonOne = document.getElementById('btn_one')
	const buttonTwo = document.getElementById('btn_two')

	prioritizeBtn.addEventListener('click', () => {
		toggleModal()
		updateButtonTxt()
	})

	function updateButtonTxt() {
		const current = getCurrentObj()
		const nameOne = current.one
		const nameTwo = current.two

		buttonOne.textContent = nameOne.name
		buttonTwo.textContent = nameTwo.name
	}

	buttonOne.addEventListener('click', () => {
		incrementValue(getCurrentObj().one)
		incrementPair()
		updateButtonTxt()
		console.log(list)
	})

	buttonTwo.addEventListener('click', () => {
		incrementValue(getCurrentObj().two)
		incrementPair()
		updateButtonTxt()
		console.log(list)
	})
}

Promise.all([
	read('list'),
	read('pairs'),
]).then(([ list, pairs ]) => {
	main(list, pairs)
	const unsorted = document.getElementById('unsorted')
	list.forEach(element => {
		const listItem = document.createElement('li')
		unsorted.append(listItem)
		listItem.textContent = element.name
	})
})
