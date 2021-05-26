/* eslint-disable linebreak-style */
import generatePairs from './generatePairs.js'

const input = document.getElementById('list_input')
const submitBtn = document.getElementById('submit_btn')
const unsorted = document.getElementById('unsorted')
const sorted = document.getElementById('sorted')

let list = []
let pairs = []

/* Generates an array of objects with two properties:
	the name of the task, and an initial 'weight' value.
	Prints the array as an unorded list for user to see */

function makeList() {
	list = []
	const arr = input.value.split('\n')
	for (let i = 0; i < arr.length; i++) {
		list.push({
			name: arr[i],
			weight: 0,
		})

		const listItem = document.createElement('li')
		unsorted.append(listItem)
		listItem.textContent = list[i].name
	};
}

/* Generates every possible combination of object pairs
	in the initial 'list' array */

submitBtn.addEventListener('click', () => {
	const names = list.map(toDo => toDo.name)
	makeList()
	pairs = generatePairs(names)
})

const prioritizeBtn = document.getElementById('prioritize_btn')
const btnSection = document.getElementById('button_section')

/* Create buttons for each set of object pairs.
	Adds an event listener which will increment the respective
	object's 'weight' value by one when clicked, and then
	display the next set of pairs */

let count = 0

function showPairs() {
	const innnerCount = count
	if (count < pairs.length) {
		const buttonOne = document.createElement('button')
		btnSection.append(buttonOne)
		buttonOne.textContent = pairs[count][0]
		buttonOne.addEventListener('click', () => {
			const item = list[list.findIndex(x => x.name == pairs[innnerCount][0])]
			item.weight = item.weight + 1
			showPairs()
		})

		const buttonTwo = document.createElement('button')
		btnSection.append(buttonTwo)
		buttonTwo.textContent = pairs[count][1]
		buttonTwo.addEventListener('click', () => {
			const item = list[list.findIndex(x => x.name == pairs[innnerCount][1])]
			item.weight = item.weight + 1
			showPairs()
		})

		count = count + 1
	} else {
		const finishButton = document.createElement('button')
		btnSection.append(finishButton)
		finishButton.textContent = 'Finished! Show me my list'
		finishButton.addEventListener('click', () => {
			sortList()
			printSortedList()
		})
	}
}

function sortList() {
	list.sort((a, b) => b.weight - a.weight)
	return list
}

function printSortedList() {
	for (let i = 0; i < list.length; i++) {
		const listItem = document.createElement('li')
		sorted.append(listItem)
		listItem.textContent = list[i].name
	}
}

prioritizeBtn.onclick = showPairs
