let runningValues = [0];
let num1 = null;
let num2 = null;
let op = null;


const strExp = document.querySelector(".exp-str");
const strRes = document.querySelector(".res-str");
updateExp();
updateRes();



let numButtons = document.querySelectorAll(".num");
numButtons = Array.from(numButtons);
numButtons.forEach((numBtn) => numBtn.addEventListener('click', function(e){

        
        if(runningValues[0] == 0){
            runningValues[0] = (Number)(numBtn.getAttribute("value"));
        }

        else{
            runningValues.push((Number)(numBtn.getAttribute("value")));
        }

    updateExp();
    updateRes();
}))

let opButtons = document.querySelectorAll(".op");
opButtons = Array.from(opButtons);
opButtons.forEach((opBtn) => opBtn.addEventListener('click', function(event){
    num1 = (Number)()
}))

function updateRes(){
    numOne  = (Number)(runningValues.join(""));
    strRes.textContent = `= ${numOne}`;
}

function updateExp(){
    strExp.textContent = (Number)(runningValues.join(""));
    return (Number)(runningValues.join(""));
}



function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mult(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1/num2;
}

function eq(){

}

function reset(){

}






