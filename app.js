let containter = document.querySelector(".container");
let blackBtn = document.createElement("button");
let rgbBtn = document.createElement("button");
let gridSize = document.createElement("button");
let resetBtn = document.createElement("button");

function createGrid(cols, rows){
    for(let i = 0; i < (cols*rows); i ++){
        const div = document.createElement("div");
        containter.style.gridTemplateColumns = `repeat${cols}, ifr`;
        containter.style.gridTemplateRows = `repeat${rows}, ifr`;
        containter.appendChild(div).classList.add("box");
    }
}

createGrid(16,16);