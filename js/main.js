import generatePairs from './generatePairs.js'
import { write } from './data.js'

let input
const inputBtn = document.getElementById('input_btn')
const prioritizeBtn = document.getElementById('prioritize_btn')
const unsortedList = document.getElementById('unsorted')

const list = []
let listId = 1

/* Generates an array of objects with two properties:
	the name of the task, and an initial 'weight' value. */

function pushToList() {
	list.push({
		name: input,
		weight: 0,
		id: listId,
	})
	listId += 1
	console.log(list)

	write('list', list)
	event.preventDefault()
}

function writeToList() {
	const listItem = document.createElement('li')
	unsortedList.append(listItem)
	listItem.textContent = input
}

inputBtn.addEventListener('click', () => {
	input = document.getElementById('list_input').value
	pushToList()
	writeToList()
	document.getElementById('list_input').focus()
	document.getElementById('list_input').value = ''
})

/* Generates every possible combination of object pairs
	in the initial 'list' array */

prioritizeBtn.addEventListener('click', () => {
	const ids = list.map(toDo => toDo.id)
	const pairs = generatePairs(ids)
	write('pairs', pairs)
})
