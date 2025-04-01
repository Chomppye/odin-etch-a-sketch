let divContainer = document.querySelector("#div-container")

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



createGrid(256)