import { read } from './data.js'

Promise.all([
	read('list'),
	read('pairs'),
]).then(([ list, pairs ]) => {
	const unsorted = document.getElementById('unsorted')
	list.forEach(element => {
		const listItem = document.createElement('li')
		unsorted.append(listItem)
		listItem.textContent = element.name
	})
})

const prioritizeBtn = document.getElementById('prioritize_btn')

function toggleModal() {
	document.querySelector('.modal').classList.toggle('modal--hidden')
	document.querySelector('.overlay').classList.toggle('overlay--hidden')
}

prioritizeBtn.addEventListener('click', toggleModal)
