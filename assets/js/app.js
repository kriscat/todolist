let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const body = document.querySelector('#body')
const red = document.querySelector('#red')
const blue = document.querySelector('#blue')
const none = document.querySelector('#none')

function Red(red) {
    body.style.backgroundColor = "red";
    return red;
}

function Blue() {
    body.style.backgroundColor = "blue";
}

function None() {
    body.style.backgroundColor = "#a0d440";
}

red.addEventListener("click", Red);
blue.addEventListener("click", Blue);
none.addEventListener("click", None);

let input = document.getElementById("input");
let output = document.getElementById("output");


function todolist(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        newArr.push(input);
    }
    return newArr[0];
}

window.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {

        todolist(input);
        output.innerHTML += todolist(input.value) + "<br> ";
        input.value = "";

    }
});
