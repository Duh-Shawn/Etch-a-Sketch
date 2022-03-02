const body = document.querySelector('body');
const container = document.querySelector('#container');

for(let i = 1; i <= 18; i++){
    let tempRow = document.createElement('div');
    tempRow.classList.add("row")
    for (let j = 1; j <= 18; j++){
        let tempColumn = document.createElement('div');
        tempColumn.classList.add("column");
        tempRow.appendChild(tempColumn);
    }
    container.appendChild(tempRow);
}

const columnList = document.querySelectorAll('.column');
columnList.forEach(item => {
    //console.log(item);
    item.addEventListener('mouseover', action);
});


function action(e){
    //console.log(e);
    e.target.classList.add("activated");
}
