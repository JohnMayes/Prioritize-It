import generatePairs from './generatePairs.js'
import { write } from './data.js'

const input = document.getElementById('list_input')
const submitBtn = document.getElementById('submit_btn')

let list = []

/* Generates an array of objects with two properties:
	the name of the task, and an initial 'weight' value. */

function makeList() {
	list = []
	const arr = input.value.split('\n').filter(str => str)
	for (let i = 0; i < arr.length; i++) {
		list.push({
			name: arr[i],
			weight: 0,
			id: i,
		})
	};

	write('list', list)
}

/* Generates every possible combination of object pairs
	in the initial 'list' array */

submitBtn.addEventListener('click', () => {
	makeList()
	const ids = list.map(toDo => toDo.id)
	const pairs = generatePairs(ids)
	write('pairs', pairs)
})
