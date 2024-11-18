/* SELECTIONNER LE DIV QUI VA CONTENIR LA GRILLE */
const container = document.querySelector(".container");

for(let i = 0; i < 16; i++){
    const lineContainer = document.createElement("div");
    lineContainer.setAttribute("class",`lineContainer`);
    container.appendChild(lineContainer);

    for(let j = 0; j < 16; j++){
        const columnDiv = document.createElement("div");
        columnDiv.setAttribute("class",`column`);
        lineContainer.appendChild(columnDiv);
    }
}

const divSquares = document.querySelectorAll(".column")
console.log(divSquares);

divSquares.forEach( (divSquare) => {
    divSquare.addEventListener("mousemove", (e) =>{
        divSquare.setAttribute("style","background: rosybrown;");
    })
    divSquare.addEventListener("mouseout", (e) =>{
        divSquare.setAttribute("style","background: red;");
    })
})


/* 


JE CREE 16 LIGNES DE DIV QUI VONT CONTENIR MES COLONNES 
JE CREE 16 COLONNES DE DIV

*/