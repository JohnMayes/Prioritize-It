const input = document.getElementById('unsorted_list')
const subButton = document.getElementById('submit_btn')


let list = []

/* Generates an array of objects with two properties:
	the name of the task, and an initial 'weight' value */
subButton.onclick = function makeList() {
	list = []
	const arr = input.value.split('\n')
	for (let i = 0; i < arr.length; i++) {
		list.push({
			name: arr[i],
			weight: 0,
		})
	};
}

const priButton = document.getElementById('prioritize_btn')
const btnSection = document.getElementById('button_list')

/* Generates every possible combination of object pairs
	in the initial 'list' array, creates a button tied to each,
	and adds an event listener which will increment the respective
	object's 'weight' value by one when clicked */

priButton.onclick = function generatePairs() {
	for (let i = 0; i < list.length - 1; i++) {
		for (let j = i + 1; j < list.length; j++) {
			const buttonOne = document.createElement('button')
			btnSection.append(buttonOne)
			buttonOne.textContent = list[i].name
			buttonOne.addEventListener('click', () => {
				list[i].weight = list[i].weight + 1
			})

			const buttonTwo = document.createElement('button')
			btnSection.append(buttonTwo)
			buttonTwo.textContent = list[j].name
			buttonTwo.addEventListener('click', () => {
				list[j].weight = list[j].weight + 1
			})
		};
	};
}
