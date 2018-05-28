
function displayValueOfCalculation(math, symbolMath) {
    displayCalculationChain += symbolMath + parseFloat(inputNumber) + ")";
    inputNumber = "Math." + math + "(" + inputNumber + ")";
    inputNumber = eval(inputNumber);
    document.getElementById('inputField').value = inputNumber;
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}
var check = false;
var calculationChain = "";
var inputNumber = "";
var displayCalculationChain = "";
var inputCalculation = "";
function getValueOfNumber(input) {
    inputNumber += input;
    document.getElementById('inputField').value = inputNumber;
}
function getResultOfChain(input) {
    this.inputCalculation = input;
    calculationChain += inputNumber;
    if (calculationChain !== "") {
        if (inputNumber == "") {
            calculationChain = calculationChain.slice(0, calculationChain.length - 1);
            displayCalculationChain = displayCalculationChain.slice(0, displayCalculationChain.length - 1);
        }
    }
    document.getElementById('inputField').value = eval(calculationChain);
    calculationChain += input;
    if (check == false) {
        displayCalculationChain += inputNumber + input;
    } else {
        displayCalculationChain += input;
    }
    check = false;
    inputNumber = "";
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
}
function clearAll() {
    calculationChain = "";
    inputNumber = "";
    displayCalculationChain = "";
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
function mathPowX_2() {
    displayCalculationChain += 'sqr(' + parseFloat(inputNumber) + ")";
    inputNumber = "Math.pow(" + inputNumber + ",2)";
    document.getElementById('inputField').value = eval(inputNumber);
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}
function mathPowX_Y() {
}
function mathSinX() { displayValueOfCalculation('sin', 'sin('); }
function mathCosX() { displayValueOfCalculation('cos', 'cos('); }
function mathTanX() { displayValueOfCalculation('tan', 'tan('); }
function mathSqrtX_2() { displayValueOfCalculation('sqrt', 'sqrt('); }
function mathPow10_X() {
    calculationChain += "Math.pow(10," + inputNumber + ")";
    displayCalculationChain += "10^" + parseFloat(inputNumber);
    document.getElementById('inputField').value = eval(Math.pow(10, inputNumber));
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}
function mathLog10() { displayValueOfCalculation('log10', 'log('); }
function mathLnX() { displayValueOfCalculation('log', 'ln('); }
function mathModX_Y() { }
function mathASinX() { displayValueOfCalculation('asin', 'sin<sub>0</sub><sup>-1</sup>('); }
function mathACosX() { displayValueOfCalculation('acos', 'cos<sub>0</sub><sup>-1</sup>('); }
function mathATanX() { displayValueOfCalculation('atan', 'tan<sub>0</sub><sup>-1</sup>(') }
function mathPowE_X() { }
function mathPi() {
    calculationChain += "Math.PI";
    displayCalculationChain += "&#8508;";
    document.getElementById('inputField').value = eval(Math.PI);
    document.getElementById('calculationChain').innerHTML = displayCalculationChain;
    check = true;
}
function equalResult() {
    if (inputNumber !== "") {
        calculationChain += inputNumber;
    } else {
        calculationChain = calculationChain.substring(0, calculationChain.length - 1);
        switch (inputCalculation) {
            case "+":
                alert(calculationChain);
                calculationChain = eval(calculationChain) + eval(calculationChain);
                break;
            case "-":
                calculationChain = eval(eval(calculationChain) - eval(calculationChain));
                break;
            case "*":
                calculationChain = eval(eval(calculationChain) * eval(calculationChain));
                break;
            case "/":
                calculationChain = eval(calculationChain) / eval(calculationChain);
                break;
        }
    }
    document.getElementById('inputField').value = eval(calculationChain);
    document.getElementById('calculationChain').innerHTML = eval(calculationChain);
};