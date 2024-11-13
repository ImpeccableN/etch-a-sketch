const container = document.querySelector("#container");
const body = document.body;
const root = document.querySelector(":root");
let gridArray = [];
let rowLength = 16;


function createGrid() {
    for(let i = 0; i < (rowLength*rowLength); i++){
        const gridDiv = document.createElement("div");
    // gridDiv.setAttribute("style", "height: boxLength%; width: boxLength%")
        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.background = "black";
        });
        gridArray.push(gridDiv);
        gridDiv.classList.toggle("gridBox");
        container.appendChild(gridDiv);
    };
}

createGrid();

const input = document.createElement("input");
input.setAttribute("type", "number");

const createButton = document.createElement("button");
createButton.textContent = "Create Grid";
createButton.addEventListener("click", () => {
    rowLength = input.value;
    gridArray.forEach((box) => {
        box.remove();
    })
    root.style.setProperty('--gridBoxHeight', String(100/rowLength + "%"));
    createGrid();
})

body.appendChild(input);
body.appendChild(createButton);