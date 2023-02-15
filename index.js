let userTool = "pencil";
let userPaintColor = ""
let gridToggle = false;

function createGrid () {

    const PIXEL_AMOUNT = document.getElementById("grid-slider").value;

    const CANVAS = document.getElementById("canvas");

    const GRID_SLIDER_TEXT = document.getElementById("grid-slider-text");

    CANVAS.innerHTML = "";
    
    if (gridToggle) {
        for (let i = 0; i < PIXEL_AMOUNT  * PIXEL_AMOUNT ; i++) {
            CANVAS.innerHTML += `<div class="grid outline"></div>`; 
        }
    } else {
        for (let i = 0; i < PIXEL_AMOUNT  * PIXEL_AMOUNT ; i++) {
            CANVAS.innerHTML += `<div class="grid"></div>`; 
        }
    }

    CANVAS.style.gridTemplateColumns = `repeat(${PIXEL_AMOUNT}, 1fr)`;
    CANVAS.style.gridTemplateRows = `repeat(${PIXEL_AMOUNT}, 1fr)`;
    GRID_SLIDER_TEXT.innerHTML = `${PIXEL_AMOUNT} x ${PIXEL_AMOUNT}`;
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

createGrid();