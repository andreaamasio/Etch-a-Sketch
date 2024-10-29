const container=document.querySelector("#container")



function createDiv(size){
    totSquare=size*size
    for (i=1;i<=totSquare;i++){
        newDiv=document.createElement("div")
        newDiv.setAttribute("class", "gridElement")
        container.appendChild(newDiv)
    }
}
function askSize(){
    let size=parseInt(prompt("How many squares do you want for side?"))
    let gridElementSize=gridElements[0].offsetWidth
    gridElements.forEach(element => {
        container.removeChild(element)
    });    
    console.log(gridElementSize)
    console.log(`size:${size}`)
    let containerSize=(size+1)*gridElementSize
    console.log(`container size:${containerSize}`)
    // container.setAttribute("style",`width:${containerSize}`)
    container.width=String(containerSize) 
    createDiv(size)
}
createDiv(256)

const gridElements=document.querySelectorAll(".gridElement")

const btnPrompt=document.querySelector("#btnPrompt")

btnPrompt.addEventListener("click",askSize)


