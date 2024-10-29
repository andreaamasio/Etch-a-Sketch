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
createDiv(256)

const gridElements=document.querySelectorAll(".gridElement")

const btnPrompt=document.querySelector("#btnPrompt")

btnPrompt.addEventListener("click",askSize)


