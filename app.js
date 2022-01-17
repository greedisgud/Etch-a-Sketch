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


function rgbColor(){
    const boxs = document.querySelectorAll(".box");
    rgbBtn.textContent = "Rainbow";
    rgbBtn.addEventListener("click", () => {
        boxs.forEach(box => box.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random()*255);
            let green = Math.floor(Math.random()*255);
            let blue = Math.floor(Math.random()*255);
            box.style.background = `rgb(${red}, ${green}, ${blue})`;
        }))
    })
    btnContainer.appendChild(rgbBtn).classList.add("button");
}

rgbColor();

function reset(){
    const boxs = document.querySelectorAll(".box")
    resetBtn.textContent = "Clear Grid";
    resetBtn.addEventListener("click", () => {
        boxs.forEach(box => box.style.background = "white")
    })
    btnContainer.appendChild(resetBtn).classList.add("button")
}

reset();







