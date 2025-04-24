const gridContainer = document.querySelector('#gridContainer');

//function to create a 16x16 grid of divs
function createDivs(x) {
    for (i=0; i<x; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv'
        gridContainer.appendChild(rowDiv);
        for (j=0; j<x; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.className = 'gridDiv';
            rowDiv.appendChild(gridDiv);
            gridDiv.style.backgroundColor = 'rgba(255,255,255,0)'
            gridDiv.addEventListener('mouseenter',() => {
                const currentColor = window.getComputedStyle(gridDiv).backgroundColor;
                if (currentColor.startsWith('rgb(') && !currentColor.includes('rgba(')) {
                    // Already at full opacity, just change the color
                    gridDiv.style.backgroundColor = 
                        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    return;
                }
                const rgbaMatch = currentColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([01]?\.\d+))?\)/);
                let alpha = 0;
                if (rgbaMatch) {
                    alpha = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;
                }
                if (alpha >= 1) {
                    gridDiv.style.backgroundColor = 
                        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    return;
                }
                alpha = Math.min(alpha + 0.1, 1);
                gridDiv.style.backgroundColor = 
                    `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${alpha})`;
            });
        }
    }
}

createDivs(16);

const createNewGrid = document.querySelector('#createNewGrid');
createNewGrid.addEventListener('click', () => {
    gridSize = prompt("How big would you like your grid?");
    if ((gridSize > 100) || (gridSize <= 0) || (Number.isInteger(Number(gridSize)) == false)) {
        alert("Don't do that.")
    } else {
        gridContainer.replaceChildren();
        createDivs(gridSize);
    }
});

const toggleBorders = document.querySelector('#toggleBorders');

toggleBorders.addEventListener('click', () => {
    gridContainer.classList.toggle("noBorder");
});