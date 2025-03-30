let divContainer = document.querySelector("#div-container")

function createGrid() {
    for (let i = 1; i < 3; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("Pink")
        divContainer.appendChild(newDiv)
        console.log("testst")
    }
}

createGrid()