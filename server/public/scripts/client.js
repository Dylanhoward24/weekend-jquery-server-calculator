$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    console.log('addBtn', $('#addBtn'));
    $('#addBtn').on('click', addOperator);

    console.log('subtractBtn', $('#subtractBtn'));
    $('#subtractBtn').on('click', subtractOperator);

    console.log('multiplyBtn', $('#multiplyBtn'));
    $('#multiplyBtn').on('click', multiplyOperator);

    console.log('divideBtn', $('#divideBtn'));
    $('#divideBtn').on('click', divideOperator);

 ///// console.log('equalsBtn', $('equalsBtn'));
    $('#equalsBtn').on('click', calculateEquation);
}

function addOperator() {
    console.log('add');
}

function subtractOperator() {
    console.log('subtract');
}

function multiplyOperator() {
    console.log('multiply');
}

function divideOperator() {
    console.log('divide');
}

function calculateEquation() {
    console.log('inside calculateEquation');
    
    let newCalculation = {
        numberOne: $('#inputOne').val(),
        numberTwo: $('#inputTwo').val(),
    }
}