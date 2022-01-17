let containter = document.querySelector(".container");
let blackBtn = document.createElement("button");
let rgbBtn = document.createElement("button");
let gridSize = document.createElement("button");
let resetBtn = document.createElement("button");
let btnContainer = document.querySelector(".buttons");


function createGrid(cols, rows){
    for(let i = 0; i < (cols*rows); i ++){
        const div = document.createElement("div");
        containter.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        containter.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        containter.appendChild(div).classList.add("box");
    }
}

createGrid(16,16);

function blackColor(){
    const boxs = document.querySelectorAll(".box");
    blackBtn.textContent = "Black";
    blackBtn.addEventListener("click", () => {
        boxs.forEach(box => box.addEventListener("mouseover", () => {
            box.style.background = "black";
        }))
    })
    btnContainer.appendChild(blackBtn).classList.add("button");
}

blackColor();

