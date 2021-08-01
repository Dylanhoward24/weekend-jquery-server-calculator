$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    // on page load, grab calculations made from the server
    // getCalculations();

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

// function getCalculations() {
//     $.ajax({
//         method: 'GET',
//         url: '/calculations'
//     }).then(function(response) {
//         console.log('GET /calculations response is', response);
        
//         let calculationsList = $('#equationHistory');
//         calculationsList.empty();

//         for (let equation of response) {
//             calculationsList.append(`

//             `)
//         }

//     });
// }

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
    console.log('newCalculation is', newCalculation);
    
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: newCalculation,
    }).then((response) => {
        console.log('POST /calculate', response);
        getCalculations();
    });
}