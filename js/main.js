/* eslint-disable linebreak-style */
// import generatePairs from './generatePairs.js'

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

	window.localStorage.setItem('list', JSON.stringify(list))
}

/* Generates every possible combination of object pairs
	in the initial 'list' array */

function generatePairs(array) {
	const pairs = []
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			pairs.push([ array[i], array[j] ])
		}
	}
	return pairs
}

submitBtn.addEventListener('click', () => {
	makeList()
	const names = list.map(toDo => toDo.name)
	let pairs = generatePairs(names)
	window.localStorage.setItem('pairs', JSON.stringify(pairs))
})
