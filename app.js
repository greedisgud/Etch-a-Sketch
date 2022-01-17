let containter = document.querySelector(".container");
let blackBtn = document.createElement("button");
let rgbBtn = document.createElement("button");
let gridSize = document.createElement("button");
let resetBtn = document.createElement("button");
let btnContainer = document.querySelector(".buttons");



function createGrid(cols, rows){
    for(let i = 0; i < (cols*rows); i++){
        const div = document.createElement("div");
        div.style.border = "1px solid black"
        containter.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        containter.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        containter.appendChild(div).classList.add("box");
    }
}

function getUserSize(){
    gridSize.textContent = "Grid Size"
    gridSize.addEventListener("click", () => {
        let userInput = prompt("Enter a grid size (n x n)");
        if (userInput === null || userInput < 1) {
            createGrid(16,16);
            reset();
            blackColor();
            rgbColor();
        }
        else{
            createGrid(userInput, userInput);
            reset();
            blackColor();
            rgbColor();
        }
    })
    btnContainer.appendChild(gridSize).classList.add("button");
}

getUserSize();



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
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", () => {
        window.location.reload();
    })
    btnContainer.appendChild(resetBtn).classList.add("button")
}

reset();








