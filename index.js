let userTool = "pencil";
let userPaintColor = ""
let gridToggle = false;

function makeGrid (pixelAmount) {
    const CANVAS = document.getElementById("canvas");
    
    for (let i = 0; i < pixelAmount * pixelAmount; i++) {
        CANVAS.innerHTML += `<div class="grid"></div>`; 
    }

    CANVAS.style.gridTemplateColumns = `repeat(${pixelAmount}, 1fr)`;
    CANVAS.style.gridTemplateRows = `repeat(${pixelAmount}, 1fr)`;

}

function undo() {

}

function toggleGrid () {

    const GRID = document.getElementsByClassName("grid");
    const TOGGLE_GRID_BUTTON = document.getElementById("toggle-grid");


    if (gridToggle) {
        gridToggle = false;
        TOGGLE_GRID_BUTTON.classList.remove("btn-solid");
        TOGGLE_GRID_BUTTON.classList.add("btn-outline");
        for (grid of GRID) {
            grid.classList.remove("outline");
        }

    } else {
        gridToggle = true;
        TOGGLE_GRID_BUTTON.classList.add("btn-solid");
        TOGGLE_GRID_BUTTON.classList.remove("btn-outline");
        for (grid of GRID) {
            grid.classList.add("outline");
        }
    }
}

makeGrid(10);