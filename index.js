const container = document.querySelector('.container');
const grid = {rows:16, cols:16};
const total = grid.rows * grid.cols;

createGrid(total);


function createGrid(total) {
    for ( let i = 0; i < total; i++){
        const cell = document.createElement("div");
        container.append(cell);
        cell.textContent = `${i+1}`;
        cell.classList.add('box');
    }
    
}

document.styleSheets[0].insertRule('.box:hover {background-color: black}');