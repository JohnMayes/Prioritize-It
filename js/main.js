import generatePairs from './generatePairs.js';
import { write } from './data.js';

let input;
const inputBtn = document.getElementById('input_btn');
const listInput = document.getElementById('list_input');
const prioritizeBtn = document.getElementById('prioritize_btn');
const unsortedList = document.getElementById('unsorted');

const list = [];
let listId = 1;

/* Generates an array of objects with two properties:
  the name of the task, and an initial 'weight' value. */

function pushToList() {
  list.push({
    name: input,
    weight: 0,
    id: listId,
  });
  listId += 1;
  console.log(list);

  write('list', list);
  event.preventDefault();
}

function writeToList() {
  const listItem = document.createElement('li');
  unsortedList.append(listItem);
  listItem.textContent = input;
}

function navigateToPage(url) {
  window.location.href = url;
}

function listIsTwoOrGreater() {
  if (list.length < 2) {
    return false;
  } else return true;
}

function handlePrioritizeClick(url) {
  if (listIsTwoOrGreater() === false) {
    alert('Two or more, please');
    return;
  } else {
    navigateToPage(url);
  }
}

function handleUpdateList () {
  input = listInput.value;
  pushToList();
  writeToList();
  listInput.focus();
  listInput.value = '';
}

inputBtn.addEventListener('click', () => handleUpdateList());

listInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    handleUpdateList();
  }
});

/* Generates every possible combination of object pairs
  in the initial 'list' array */

prioritizeBtn.addEventListener('click', () => {
  handlePrioritizeClick('prioritize.html');
  const ids = list.map((toDo) => toDo.id);
  const pairs = generatePairs(ids);
  write('pairs', pairs);
});
