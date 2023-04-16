const result = document.getElementById('result');
let calculation = '';

function add(value) {
    calculation += value;
    result.value = calculation;
}

function clearResult() {
    calculation = '';
    result.value = '';
}

function deleteLast() {
    calculation = calculation.slice(0, -1);
    result.value = calculation;
}

function calculate() {
    try {
        const answer = eval(calculation);
        result.value = answer;
        calculation = answer.toString();
    } catch (error) {
        alert('Ошибка вычисления: ' + error);
    }
}
