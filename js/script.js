const post = document.getElementById("buttonPost");
const mark = document.getElementById("buttonMark");
const del = document.getElementById("buttonDel");
const clear = document.getElementById("buttonClear");

post.addEventListener("click", todoPost);
mark.addEventListener("click", todoMark);
del.addEventListener("click", todoDel);
clear.addEventListener("click", todoClear);


const getTodos = () => {
  return document.getElementsByName("todo");
}

function todoPost(e) {
  e.preventDefault();
  let todo = document.getElementById("todoText").value;
  let list = document.getElementById("todoList");
  let currentList = list.innerHTML;
  list.innerHTML = currentList + `<input type="checkbox" name="todo" /> ${todo} <br>`
}

function todoMark(e) {
  e.preventDefault();
  getTodos().forEach(t => {t.checked = true;})
}

function todoDel(e) {
  e.preventDefault();
  let list = document.getElementById("todoList");
  list.innerHTML = " ";
}

function todoClear(e) {
  e.preventDefault();
  getTodos().forEach(t => {t.checked = false;})
}