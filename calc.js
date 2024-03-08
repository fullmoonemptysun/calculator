let currCalc = {
    num1 : [0],
    num2 : [0],
    op : null,
    result: 0          };

let num = 0; //starting value for the exp string.
let numValue = 0;
let strExp = document.querySelector(".exp-str");
let strRes = document.querySelector(".res-str");
updateExp(num);
updateRes();




let numButtons = document.querySelectorAll(".num");
numButtons = Array.from(numButtons);
numButtons.forEach((numBtn) => numBtn.addEventListener('click', function(e){
    numValue = (Number)(numBtn.getAttribute("value"));
    if(currCalc.op != null){
        updateExp((Number)(currCalc.num2.join("")));

        if(currCalc.num2[0] === 0){
            currCalc.num2[0] = numValue;
        }

        else{
            currCalc.num2.push(numValue);
        }

        updateExp((Number)(currCalc.num2.join("")));
    }

    else if(currCalc.num1[0] === 0){
        currCalc.num1[0] = numValue;
        updateExp((Number)(currCalc.num1.join("")));
    }

    else{
        currCalc.num1.push(numValue);
        updateExp((Number)(currCalc.num1.join("")));
    }

    updateRes();
}));

let opButtons = document.querySelectorAll(".op");
opButtons = Array.from(opButtons);
opButtons.forEach((opBtn) => opBtn.addEventListener('click', function(e){
    let opVal = opBtn.getAttribute("value");
    if(currCalc.op == null){
        currCalc.op = opVal;
        strExp.textContent += opBtn.getAttribute("name");

    }

    else{
        currCalc.op = opVal;
        strExp.textContent = currCalc.result + opBtn.getAttribute("name");

        currCalc.num1 = currCalc.result.toString().split("");
        currCalc.num2 = [0];

    }
}));

let clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', function(e){
    currCalc = {
        num1: [0],
        num2: [0],
        op: null,
    }
    updateExp(num);
    updateRes();
});

let equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', function(e){
    currCalc.num1 = currCalc.result.toString().split(""); 
    currCalc.num2 = [0];
    currCalc.op = null;

    updateExp((Number)(currCalc.num1.join("")));
    strRes.textContent = "= " + currCalc.result;
})



function updateExp(num){
    strExp.textContent = (Number)(num);
}

function updateRes(){
    let res =  operate((Number)(currCalc.num1.join("")), currCalc.op, (Number)(currCalc.num2.join("")));
    strRes.textContent = "= " + res;
    currCalc.result = res

}


function operate(num1, op, num2){
    if(op === null){
        return num1;
    }

    switch (op){
        case "add":
            return add(num1, num2);
            break;

        case "sub":
            return sub(num1, num2);
            break;
        case "mult":
            return mult(num1,num2);
            break;
        case "div":
            return div(num1, num2);
            break;

    }
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






