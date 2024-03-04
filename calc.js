let runningValues = [0];
const strExp = document.querySelector(".exp-str");
updateExp();


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
}))



function updateExp(){
    strExp.textContent = (Number)(runningValues.join(""));
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






