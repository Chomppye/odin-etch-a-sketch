let divContainer = document.querySelector("#div-container")
let resetBtn = document.querySelector("#reset-button")


function hover(event) {
    if (event.target.style.backgroundColor === "black") return;
    event.target.style.backgroundColor = "black"
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

createGrid(256)

resetBtn.addEventListener("click", resetGrid)