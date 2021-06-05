import { read } from './data.js'

let pair = []

Promise.all([
	read('list'),
	read('pairs'),
]).then(([ list, pairs ]) => {
	const unsorted = document.getElementById('unsorted')
	debugger
	list.forEach(element => {
		const listItem = document.createElement('li')
		unsorted.append(listItem)
		listItem.textContent = element.name
	})
	pair = pairs
})

const prioritizeBtn = document.getElementById('prioritize_btn')
const itemBtn = document.getElementsByClassName('.item_btn')
const buttonOne = document.getElementById('btn_one')
const buttonTwo = document.getElementById('btn_two')

let pairCount = 0

function getCurrentPair () {
	buttonOne.textContent = pair[pairCount][0]
	buttonTwo.textContent = pair[pairCount][1]
	pairCount++
}

function toggleModal() {
	document.querySelector('.modal').classList.toggle('modal--hidden')
	document.querySelector('.overlay').classList.toggle('overlay--hidden')
}

prioritizeBtn.addEventListener('click', () => {
	toggleModal()
	getCurrentPair()
})

itemBtn.addEventListener('click', () => {
	getCurrentPair()
})