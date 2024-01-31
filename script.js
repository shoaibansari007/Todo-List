const ul = document.querySelector(".list-container");
const task = document.querySelector(".new-task");
const down = document.querySelector(".down");
const todoList = document.querySelector(".todo-list");
const up = document.querySelector(".up");
function addTask() {
  if (task.value == "") {
    alert("You must add some task!");
  } else {
    const dlt = document.createElement("img");
    let li = document.createElement("li");
    li.textContent = task.value;
    ul.appendChild(li);
    li.appendChild(dlt);
    dlt.src = "img/delete.gif";
    dlt.classList.add("dlt");
  }
  task.value = "";
  saveData();
}
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}
function showData() {
  ul.innerHTML = localStorage.getItem("data");
}

showData();
