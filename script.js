
const container = document.querySelector(".container");
const dimensionsButton = document.querySelector(".dimensions");
dimensionsButton.addEventListener("click", buttomPrompt);

const toggleCanvas = document.querySelector(".toggleCanvas");
toggleCanvas.addEventListener("click", ()=>{
    container.classList.toggle("black");

});


makeGrid(16)

function makeGrid(dimensions){       

    let widthRatio  = (100/dimensions);          //persentage for setting box dimensions

    for(let row=1; row<=dimensions; row++){
        for(let column=1; column<=dimensions;column++){

           let temp =document.createElement("div");
           temp.textContent = `.`  // can be removed later
           temp.style.cssText = `display: inline-block; min-width: ${widthRatio}%; min-height: ${widthRatio}%; `
           container.appendChild(temp);
           temp.addEventListener("mouseover", ()=>{  //touch move for touchscreens?
               temp.classList.add("colorMe");
           })        
        }
    }
}

function buttomPrompt(){
    let dimensions = prompt("What should the dimensions be? Type a number!")            //catch not a number

    if(dimensions >100){ 
    alert("maximum dimensions are 100x100, \n a larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing") 
    return; }

    container.innerHTML ="";
    makeGrid(dimensions)
}

