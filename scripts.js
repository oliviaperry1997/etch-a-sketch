const gridContainer = document.querySelector('#gridContainer');

//function to create a 16x16 grid of divs
function createDivs(x,y) {
    for (i=0; i<x; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv'
        gridContainer.appendChild(rowDiv);
        for (j=0; j<y; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.className = 'gridDiv';
            rowDiv.appendChild(gridDiv);
            gridDiv.addEventListener('mouseenter',() => {
                gridDiv.className = 'hover';
            });
        }
    }
}

createDivs(16,16);

const createNewGrid = document.querySelector('#createNewGrid');
createNewGrid.addEventListener('click', () => {
    gridSize = prompt("How big would you like your grid?");
    if ((gridSize > 100) || (gridSize <= 0) || (Number.isInteger(Number(gridSize)) == false)) {
        alert("Don't do that.")
    } else {
        gridContainer.replaceChildren();
        createDivs(gridSize,gridSize);
    }
});