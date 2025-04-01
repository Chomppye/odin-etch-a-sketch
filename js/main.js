let divContainer = document.querySelector("#div-container")

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("Pink")
        divContainer.appendChild(newDiv)
        console.log("testst")
    }
}

createGrid()