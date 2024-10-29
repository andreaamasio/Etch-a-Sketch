const container=document.querySelector("#container")



function createDiv(size){
    totSquare=size*size
    for (i=1;i<=totSquare;i++){
        newDiv=document.createElement("div")
        newDiv.setAttribute("class", "gridElement")
        container.appendChild(newDiv)
    }
}
function checkPrompt(size){
    if (isNaN(size)||size>100){
        size=parseInt(prompt("Please enter numbers only and lower than 100. How many squares do you want for side?"))
        checkPrompt(size)
    } else {
        return createNewGrid(size)
    }
    
}
function askSize(){
    let size=parseInt(prompt("How many squares do you want for side? (maximum is 100)"))    
    checkPrompt(size)
}
function createNewGrid(size){   
    // below remove 2 because of margin 1px for side of the width
    let gridElementSize=gridElements[0].offsetWidth-2
    gridElements.forEach(element => {
        container.removeChild(element)
    });    
    
    
    let containerSize=(size+1)*gridElementSize
    
    container.setAttribute("style",`width:${containerSize}px`)
     
    createDiv(size)
}

createDiv(16)


const gridElements=document.querySelectorAll(".gridElement")

const btnPrompt=document.querySelector("#btnPrompt")

btnPrompt.addEventListener("click",askSize)
let opacity = 0
function changeBgColor(){
    let red=String(getColor())
    let green=String(getColor())
    let blue=String(getColor())    
    this.setAttribute("style",`background-color:rgb(${red},${green},${blue}); opacity:${opacity}`)
    opacity+=0.1
}
function getColor(){
    let randomNum=parseInt(Math.random()*257)
    return randomNum
}

gridElements.forEach(element => {
    element.addEventListener("mouseover",changeBgColor)
});


