/* eslint-disable linebreak-style */
const list = JSON.parse(window.localStorage.getItem('list'))
const pairs = JSON.parse(window.localStorage.getItem('pairs'))

const unsorted = document.getElementById('unsorted')

const prioritizeBtn = document.getElementById('prioritize_btn')

//	prioritizeBtn.onclick = JSON stringify, local storage
