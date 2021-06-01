/* eslint-disable linebreak-style */
const list = JSON.parse(window.localStorage.getItem('list'))
const pairs = JSON.parse(window.localStorage.getItem('pairs'))
const unsorted = document.getElementById('unsorted');

(() => {
	list.forEach(element => {
		const listItem = document.createElement('li')
		unsorted.append(listItem)
		listItem.textContent = element.name
	})
})()

const prioritizeBtn = document.getElementById('prioritize_btn')
