/*

JS file to make ETCH-A-SKETCH work!

De'Shawn Maynard
The Odin Project - March 2022

*/

const body = document.querySelector('body');
const container = document.querySelector('#container');

// clear screen button setup
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', resetGrid);

//event Listeners to provide mode selection functionality
// draw and erase buttons setup
let mode = "";
const eraserButton = document.querySelector('#eraserButton');
eraserButton.addEventListener('click', setMode); // eraser button has been clicked - mode is set to erase
const drawButton = document.querySelector('#drawButton');
drawButton.addEventListener('click', setMode); // draw button has been clicked - mode is set to draw


function setMode(e){
    if(e.target.id === "eraserButton"){
        mode = "erase";
        initGrid();
    }
    else if (e.target.id === "drawButton"){
        mode = "draw";
        initGrid();
    }
    else{
        mode = "";
    }
    
}

//highlight the square
function activateSquare(e){
    e.target.classList.add("activated");
}

//remove highlights from the square
function disableSquare(e){
    e.target.classList.remove("activated");
} 

// Configures the grid
// Modifies the event listeners to draw / erase functionalities on each square based on the selected mode
function initGrid(){
    const columnList = document.querySelectorAll('.column');
    if(mode === "draw"){
        columnList.forEach(item => {
            item.removeEventListener('mouseover', disableSquare);
            item.addEventListener('mouseover', activateSquare);
        });
    }
    else if(mode === "erase"){
        columnList.forEach(item => {
            item.removeEventListener('mouseover', activateSquare);
            item.addEventListener('mouseover', disableSquare);
        });
    }
    
}

//create grid ui of provided size
//calls initGrid function to attach the draw / erase listeners
function setupGrid(numSquares){
    for(let i = 1; i <= numSquares; i++){
        let tempRow = document.createElement('div');
        tempRow.classList.add("row")
        for (let j = 1; j <= numSquares; j++){
            let tempColumn = document.createElement('div');
            tempColumn.classList.add("column");
            tempRow.appendChild(tempColumn);
        }
        container.appendChild(tempRow);
    }
    initGrid();
}

//clears the entire grid
//prompts user for a grid size
//calls setupGrid function to set up and configure the ui of the new sized grid
function resetGrid(){
    container.textContent = '';
    let promptResult = prompt("Enter a number between 25 and 100", 25);
    if (promptResult == null) return;
    while (promptResult < 25 || promptResult > 100){
        promptResult = prompt("Enter a number between 25 and 100", 25);
        if (promptResult == null) return;
    }
    setupGrid(promptResult);
}

//on page load - starts with a grid of size 25
setupGrid(25);

    

