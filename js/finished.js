import { read } from './data.js'

function main(list) {
	const sorted = document.getElementById('sorted')

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

	sortList()
	printSortedList()
}

Promise.all([
	read('list'),
]).then(([ list ]) => {
	main(list)
})
