const body = document.querySelector('body');
const container = document.querySelector('#container');
const clearButton = document.querySelector('button');
clearButton.addEventListener('click', resetGrid);


function activateSquare(e){
    e.target.classList.add("activated");
}   

function initGrid(){
    const columnList = document.querySelectorAll('.column');
    columnList.forEach(item => {
        item.addEventListener('mouseover', activateSquare);
    });
}

function createGrid(numSquares){
    console.log('called');
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

function resetGrid(){
    container.textContent = '';
    let promptResult = prompt("Enter a number between 25 and 100", 25);
    if (promptResult == null) return;
    while (promptResult < 25 || promptResult > 100){
        promptResult = prompt("Enter a number between 25 and 100", 25);
        if (promptResult == null) return;
    }
    createGrid(promptResult);
}

createGrid(18);

    

