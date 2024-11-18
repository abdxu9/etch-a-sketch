
const container = document.querySelector(".container");
const button = document.querySelector("#grid-setup");

function createGrid(numberOfSquare = 16){
    squareSize = 960/numberOfSquare;

    for(let i = 0; i < numberOfSquare; i++){
        const lineContainer = document.createElement("div");
        lineContainer.setAttribute("class",`lineContainer`);
        lineContainer.style.height = `${squareSize}px`
        lineContainer.style.width = "960px";
        container.appendChild(lineContainer);

        for(let j = 0; j < numberOfSquare; j++){
            const square = document.createElement("div");
            square.setAttribute("class",`square`);
            square.style.height = `${squareSize}px`
            square.style.width = `${squareSize}px`
            lineContainer.appendChild(square);
        }
    }
    detecteButton();
}

function detecteButton(){
    const squares = document.querySelectorAll(".square");
    squares.forEach( (square) => {
        square.addEventListener("mousemove", (e) =>{
            square.style.background= "rosybrown";
        })
        square.addEventListener("mouseout", (e) =>{
            square.style.background = "red";
        });
    });
}

function createNewGrid(){
    const lineContainers = document.querySelectorAll(".lineContainer");

    lineContainers.forEach((line) =>{
        const squares = line.querySelectorAll(".square");
        squares.forEach((square) =>{
            line.removeChild(square);
        })
        container.removeChild(line);
    })

    let numberOfSquare = parseInt(prompt("Number Of Square Per Line: ",16));
    while(numberOfSquare < 1 || numberOfSquare > 100){
        numberOfSquare = parseInt(prompt("Number Of Square Per Line: ",16));
    }
    createGrid(numberOfSquare);
    detecteButton();

}


createGrid()










/* 


JE CREE 16 LIGNES DE DIV QUI VONT CONTENIR MES COLONNES 
JE CREE 16 COLONNES DE DIV

*/