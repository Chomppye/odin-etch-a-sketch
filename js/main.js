let divContainer = document.querySelector("#div-container")

let resetBtn = document.querySelector("#reset-button")
let changeSizeBtn = document.querySelector("#change-size")

function hover(event) {
    if (event.target.style.backgroundColor === "black") return;
    event.target.style.backgroundColor = "black"
}

function deleteGrid() {
    let divs = divContainer.querySelectorAll(".Etch")
    divs.forEach((div, index) => {
        div.remove()
    })
}

function createGrid(amount) {
    for (let i = 0; i < amount; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("Etch")
        divContainer.appendChild(newDiv)
        newDiv.addEventListener("mouseover", hover)
    }
}

function resetGrid() {
    let divs = divContainer.querySelectorAll(".Etch")
    divs.forEach((div, index ) => {
        div.style.backgroundColor = "white"
    })
}

function changeGridSize(event) {
    let value = prompt("Change the amount of squares in the grid, Max = 256, min = 64")
    value = parseInt(value)

    if (!isNaN(value) && value >= 64 && value <= 256) {
        deleteGrid()
        createGrid(value)
    } else {
        alert("Incorrect input, please enter a number between 64 and 256")
    }
}

function test() {
    console.log("ggg")
}

createGrid(256)

resetBtn.addEventListener("click", resetGrid)
changeSizeBtn.addEventListener("click", changeGridSize)