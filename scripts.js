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
            gridDiv.style.backgroundColor = 'rgba(255,255,255,0)'
            gridDiv.addEventListener('mouseenter',() => {
                const currentColor = window.getComputedStyle(gridDiv).backgroundColor;
                console.log("Current color:", currentColor);
                const rgbaMatch = currentColor.match(/rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/);
                let alpha = 0;
                if (rgbaMatch) {
                    alpha = rgbaMatch ? parseFloat(rgbaMatch[4]) : 0;
                    console.log(`Extracted alpha: ${alpha}`);
                    gridDiv.style.backgroundColor =
                    `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${alpha})`;
                } else {
                    console.error("No match found for current color:", currentColor);
                }
                alpha = Math.min(alpha + 0.1, 1);
                console.log(`New alpha: ${alpha}`);

                gridDiv.style.backgroundColor =
                `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${alpha})`;
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