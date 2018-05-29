

var checkExpression = false;
var checkPowX_Y = false;
var expressionChain = "";
var er_equalResult = "";
var check = false;
var calculationChain = "";
var inputNumber = "";
var displayCalculationChain = "";
var inputCalculation = "";
var tempInputNumber = "";
function getValueOfNumber(input) {
    if (inputNumber.includes('.')) {
        if (input !== '.') {
            inputNumber += input;
        }else{

        }
    } else {
        inputNumber += input;
    }
    document.getElementById('inputField').value = inputNumber;
}
var preCalculation = "";
function whenStartExpression(input) {
    this.inputCalculation = input;
    if (checkPowX_Y == true) {
        expressionChain += inputNumber + ")";
    } else {
        expressionChain += inputNumber;
    }
    checkPowX_Y = false;
    if (expressionChain !== "") {
        if (inputNumber == "") {
            expressionChain = expressionChain.slice(0, expressionChain.length - 1);
            displayCalculationChain = displayCalculationChain.slice(0, displayCalculationChain.length - 1);
        }
    }
    if (input == "*" || input == "/") {
        if (expressionChain.lastIndexOf('+') > expressionChain.lastIndexOf('-')) {
            er_equalResult = expressionChain.substring(expressionChain.lastIndexOf('+') + 1, expressionChain.length);
        } else {
            er_equalResult = expressionChain.substring(expressionChain.lastIndexOf('-') + 1, expressionChain.length);
        }
    } else {
        er_equalResult = expressionChain;
    }
    expressionChain += input;
    if (check == false) {
        displayCalculationChain += inputNumber + input;
    } else {
        displayCalculationChain += input;
    }
    check = false;
    tempInputNumber = inputNumber;
    inputNumber = "";
    document.getElementById('inputField').value = eval(er_equalResult);
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
}
function normalCalculation(input) {
    this.inputCalculation = input;
    if (checkPowX_Y == true) {
        calculationChain += inputNumber + ")";
    } else {
        calculationChain += inputNumber;
    }
    checkPowX_Y = false;
    if (calculationChain !== "") {
        if (inputNumber == "") {
            calculationChain = calculationChain.slice(0, calculationChain.length - 1);
            displayCalculationChain = displayCalculationChain.slice(0, displayCalculationChain.length - 1);
        }
    }
    if (input == "*" || input == "/") {
        if (calculationChain.lastIndexOf('+') > calculationChain.lastIndexOf('-')) {
            er_equalResult = calculationChain.substring(calculationChain.lastIndexOf('+') + 1, calculationChain.length);
        } else {
            er_equalResult = calculationChain.substring(calculationChain.lastIndexOf('-') + 1, calculationChain.length);
        }
    } else {
        er_equalResult = calculationChain;
    }
    calculationChain += input;
    if (check == false) {
        displayCalculationChain += inputNumber + input;
    } else {
        displayCalculationChain += input;
    }
    check = false;
    tempInputNumber = inputNumber;
    inputNumber = "";
    document.getElementById('inputField').value = eval(er_equalResult);
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
}

function getResultOfChain(input) {
    if (checkExpression) {
        whenStartExpression(input);
    } else {
        normalCalculation(input);
    }
}
function clearAll() {
    var checkExpression = false;
    var checkPowX_Y = false;
    var expressionChain = "";
    var er_equalResult = "";
    var check = false;
    var calculationChain = "";
    var inputNumber = "";
    var displayCalculationChain = "";
    var inputCalculation = "";
    var tempInputNumber = "";
    document.getElementById('inputField').value = '0';
    document.getElementById('calculationChain').innerHTML = "";
}
function backSpace() {
    inputNumber = inputNumber.substring(0, inputNumber.length - 1);
    if (inputNumber == "") {
        document.getElementById('inputField').value = '0';
    } else {
        document.getElementById('inputField').value = inputNumber;
    }
}
function displayValueOfCalculation(math, symbolMath) {
    displayCalculationChain += symbolMath + parseFloat(inputNumber) + ")";
    inputNumber = "Math." + math + "(" + inputNumber + ")";
    inputNumber = eval(inputNumber);
    document.getElementById('inputField').value = inputNumber;
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}
function mathPowX_2() {
    displayCalculationChain += 'sqr(' + parseFloat(inputNumber) + ")";
    inputNumber = "Math.pow(" + inputNumber + ",2)";
    document.getElementById('inputField').value = eval(inputNumber);
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}

function mathPowX_Y() {
    displayCalculationChain += parseFloat(inputNumber) + "^";
    inputNumber = "Math.pow(" + inputNumber + ",";
    calculationChain += inputNumber;
    inputNumber = "";
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    checkPowX_Y = true;
}
function mathSinX() { displayValueOfCalculation('sin', 'sin('); }
function mathCosX() { displayValueOfCalculation('cos', 'cos('); }
function mathTanX() { displayValueOfCalculation('tan', 'tan('); }
function mathSqrtX_2() { displayValueOfCalculation('sqrt', 'sqrt('); }
function mathPow10_X() {
    displayCalculationChain += "10^" + inputNumber;
    inputNumber = "Math.pow(10," + inputNumber + ")";
    document.getElementById('inputField').value = eval(inputNumber);
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}
function mathLog10() { displayValueOfCalculation('log10', 'log('); }
function mathLnX() { displayValueOfCalculation('log', 'ln('); }
function mathModX_Y() {
    displayCalculationChain += parseFloat(inputNumber) + "Mod";
    inputNumber += '%';
    calculationChain += inputNumber;
    inputNumber = "";
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
}
function mathASinX() { displayValueOfCalculation('asin', 'sin<sub>0</sub><sup>-1</sup>('); }
function mathACosX() { displayValueOfCalculation('acos', 'cos<sub>0</sub><sup>-1</sup>('); }
function mathATanX() { displayValueOfCalculation('atan', 'tan<sub>0</sub><sup>-1</sup>(') }
function mathPowE_X() {

}
function mathPi() {
    inputNumber += "Math.PI";
    displayCalculationChain += "&#8508;";
    document.getElementById('inputField').value = eval(Math.PI);
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}

function equalResult() {
    // if (inputNumber !== "") {
    //     calculationChain += inputNumber;
    //     document.getElementById('inputField').value = eval(calculationChain);
    //     document.getElementById('calculationChain').innerHTML = calculationChain;
    // } else {
    //     calculationChain += eval(er_equalResult) + inputCalculation;
    //     document.getElementById('inputField').value = eval(calculationChain.substring(0, calculationChain.length - 1));
    //     document.getElementById('calculationChain').innerHTML = calculationChain;
    // }
    if (inputNumber !== "") {
        calculationChain += inputNumber;
        if (checkPowX_Y) {
            calculationChain += ")";
            displayCalculationChain += inputNumber;
        }
        checkPowX_Y = false;
        document.getElementById('inputField').value = eval(calculationChain);
        document.getElementById('calculationChain').innerHTML = displayCalculationChain;
        inputNumber = eval(calculationChain);
        calculationChain = "";
        displayCalculationChain = "";
    }
};

function startExpression() {
    displayCalculationChain += "(";
    er_equalResult = "";
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    checkExpression = true;
}
function endExpression() {
    if (inputNumber !== "") {
        displayCalculationChain += inputNumber + ")";
        expressionChain += inputNumber;
        inputNumber = eval(expressionChain);
        document.getElementById('inputField').value = eval(expressionChain);
        document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    }
    checkExpression = false;
    check = true;
}