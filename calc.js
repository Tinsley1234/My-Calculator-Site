// Add animation later
// do same thing with jquery

let initialInput = " ";
let previousInput = null;
let operator = null;

const outputBox = document.getElementById("box");

// Number button functionality
document.querySelectorAll("[data-number]").forEach(button => {button.addEventListener(
    "click", ()=>{
        initialInput+=button.dataset.number;
        outputBox.value = initialInput;
    }
)});

// var noOfDataNumber = document.querySelectorAll("[data-number]").length;
// for (i=0; i<= noOfDataNumber ; i++){
    // document.querySelectorAll("[data-number]")[i].addEventlistener("click", function(){
        // console.log(innerHTML)
// })
// }
// 



