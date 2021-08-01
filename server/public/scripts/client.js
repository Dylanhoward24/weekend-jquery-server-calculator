$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

 ///// console.log('addBtn', $('#addBtn'));
    $('#addBtn').on('click', addOperator);

 ///// console.log('subtractBtn', $('#subtractBtn'));
    $('#subtractBtn').on('click', subtractOperator);

 ///// console.log('multiplyBtn', $('#multiplyBtn'));
    $('#multiplyBtn').on('click', multiplyOperator);

 ///// console.log('divideBtn', $('#divideBtn'));
    $('#divideBtn').on('click', divideOperator);

 ///// console.log('equalsBtn', $('equalsBtn'));
    $('#equalsBtn').on('click', calculateEquation);
}

function addOperator() {
    console.log('add');
    let operatorToPass = '+'

    $.ajax({
        method: 'POST',
        url: '/add',
        data: operatorToPass,
    }).then((response) => {
        console.log('POST /add', response);
    });
}

function subtractOperator() {
    console.log('subtract');
    let operatorToPass = '-'

    $.ajax({
        method: 'POST',
        url: '/subtract',
        data: operatorToPass,
    }).then((response) => {
        console.log('POST /subtract', response);
    });
}

function multiplyOperator() {
    console.log('multiply');
    let operatorToPass = '*'

    $.ajax({
        method: 'POST',
        url: '/multiply',
        data: operatorToPass,
    }).then((response) => {
        console.log('POST /multiply', response);
    });
}

function divideOperator() {
    console.log('divide');
    let operatorToPass = '/'

    $.ajax({
        method: 'POST',
        url: '/divide',
        data: operatorToPass,
    }).then((response) => {
        console.log('POST /divide', response);
    });
}

function calculateEquation() {
    console.log('inside calculateEquation');
    
    let newCalculation = {
        numberOne: $('#inputOne').val(),
        numberTwo: $('#inputTwo').val(),
    }
}