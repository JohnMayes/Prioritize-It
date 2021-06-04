/* eslint-disable linebreak-style */
import generatePairs from './generatePairs.js'
import { write } from './data.js'

const input = document.getElementById('list_input')
const submitBtn = document.getElementById('submit_btn')

let list = []

/* Generates an array of objects with two properties:
	the name of the task, and an initial 'weight' value. */

function makeList() {
	list = []
	const arr = input.value.split('\n')
	for (let i = 0; i < arr.length; i++) {
		list.push({
			name: arr[i],
			weight: 0,
		})
	};

	write('list', list)
}

/* Generates every possible combination of object pairs
	in the initial 'list' array */

submitBtn.addEventListener('click', () => {
	makeList()
	const names = list.map(toDo => toDo.name)
	const pairs = generatePairs(names)
	write('pairs', pairs)
})
