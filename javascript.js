const container = document.querySelector("#container");

container.setAttribute("style", "height: 400px; width: 400px; border: 5px solid black; display: flex; flex-wrap: wrap");

for(let i = 0; i < 16; i++){
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("style", "height: 25%; width: 25%;  background: lightblue")
    gridDiv.textContent = "green";
    gridDiv.classList.toggle("gridBox");
    container.appendChild(gridDiv);
};