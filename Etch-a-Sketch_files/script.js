
const container = document.querySelector(".container");
const dimensionsButton = document.querySelector(".dimensions");
dimensionsButton.addEventListener("click", buttomPrompt);

const toggleCanvas = document.querySelector(".toggleCanvas");

toggleCanvas.addEventListener("click", ()=>{
    container.classList.toggle("rainbow-bg");
    toggleCanvas.innerHTML="There are no mistakes, just happy accidents. <br> -Bob Ross";
});







const reset = document.querySelector(".resetButton");
reset.addEventListener("click",()=>{
 container.innerHTML ="";
makeGrid(currentDim)})

let currentDim= 16;


makeGrid(currentDim)

function makeGrid(dimensions){       

    let widthRatio  = (100/dimensions);          //persentage for setting box dimensions

    for(let row=1; row<=dimensions; row++){
        for(let column=1; column<=dimensions;column++){

           let temp =document.createElement("div");
           temp.textContent = `.`  //fix this (to do)
           temp.style.cssText = `display: inline-block; min-width: ${widthRatio}%; min-height: ${widthRatio}%;`
           temp.classList.add("colorBox");
           container.appendChild(temp);
           temp.addEventListener("mouseover", ()=>{  //touch move for touchscreens?
               temp.classList.add("whiteFont");
           })  
           temp.addEventListener("touchmove",()=>{temp.classList.add("whiteFont")})   
        }
    }
}

function buttomPrompt(){
    let dimensions = prompt("What should the dimensions be? Type a number!")            //catch not a number
    currentDim = dimensions;

    if(dimensions >100){ 
    alert("maximum dimensions are 100x100, \n a larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing") 
    return; }

    container.innerHTML ="";
    makeGrid(currentDim)
}

//functino repC
//container.replaceChildren