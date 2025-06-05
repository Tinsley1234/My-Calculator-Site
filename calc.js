alert(" Welcome");
// Add animation late

function calculte(){
    
}

var numOfButtons = document.querySelectorAll(".btn").length;
 
function clicks(){
    console.log(this.innerHTML);
}

for(i=0; i<numOfButtons ; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", clicks)
}

