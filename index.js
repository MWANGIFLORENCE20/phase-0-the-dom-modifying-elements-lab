const mainElement = document.getElementById("main");
if(mainElement){
    mainElement.remove();
}

const  newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")


const name = "Florence Wangechi";
newHeader.textContent = "${name} is the champion";
 
document.body.appendChild(newHeader);
