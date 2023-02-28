let todo = document.getElementById("todo")
let done = document.getElementById("done")
let waktu = document.getElementById("waktu") 

let date = new Date();
let hours = date.getHours();

if (hours >= 6 && hours < 12) {
  waktu.textContent = "morning"
} else if (hours >= 12 && hours < 15) {
  waktu.textContent = "afternoon"
} else if (hours >= 15 && hours < 18) {
  waktu.textContent = "evening"
} else {
  waktu.textContent = "night"
}

function add() {
  //1. ambil nilai dari text.
  let text = document.getElementById("new_text");
  console.log(text.value);

  //2. tambahkan text kedalam ul
  let todoList =
    "<tr><td>" +
    "<span class='todos' onclick='toggle(this)'>" +
    text.value +
    "</span>" +
    "<button class='btn-clear' onclick='removeItem(this)'><center><i class='fa-solid fa-trash-can'></i> </center> </button> </td> </tr>";

  todo.insertAdjacentHTML("afterbegin", todoList);

  //3. kosongkan ul ketika user menekan tombil reset
  text.value = "";
}

function toggle(el) {
  el.classList.toggle("done");
}

function removeItem(el) {
  el.parentElement.remove();
}
