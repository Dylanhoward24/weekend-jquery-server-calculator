$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    // on page load, grab calculations made from the server
    getCalculations();

 ///// console.log('addBtn', $('#addBtn'));
    $('#addBtn').on('click', addOperator);

 ///// console.log('subtractBtn', $('#subtractBtn'));
    $('#subtractBtn').on('click', subtractOperator);

 ///// console.log('multiplyBtn', $('#multiplyBtn'));
    $('#multiplyBtn').on('click', multiplyOperator);

 ///// console.log('divideBtn', $('#divideBtn'));
    $('#divideBtn').on('click', divideOperator);

 ///// console.log('equalsBtn', $('#equalsBtn'));
    $('#equalsBtn').on('click', calculateEquation);

 ///// console.log('clearBtn', $('#clearBtn'));
    $('#clearBtn').on('click', clearInputFields);
}

function getCalculations() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then(function(response) {
        console.log('GET /calculations response is', response);
        
        // empty the div id="equationAnswer"
        let answerDisplay = $('#equationAnswer');
        answerDisplay.empty();

        // empty the ul id="equationHistory"
        let calculationsList = $('#equationHistory');
        calculationsList.empty();

        // append the current equation's answer to div
        // id="equationAnswer" in bold, 24pt text with
        // a 20px margin on top
        answerDisplay.append(`${response[response.length-1].answer}`);
        answerDisplay.css({
            'font-weight':'bold',
            'font-size':'24pt',
            'margin-top':'20px'
        });

        // append the current and history of equations
        // to the DOM by looping through the
        // calculationsHistory array on server side
        for (let calculation of response) {
            calculationsList.append(`
                <li>
                    ${calculation.numberOne} 
                    ${calculation.operator} 
                    ${calculation.numberTwo} = 
                    ${calculation.answer}
                </li>
            `);
        }
    });
}

function addOperator() {
    console.log('add');
    let operatorToPass = {
        operator: '+'
    };

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
    let operatorToPass = {
        operator: '-'
    };

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
    let operatorToPass = {
        operator: '*'
    };
    
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
    let operatorToPass = {
        operator: '/'
    };
    
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
    
    // convert the strings to numbers
    let numberOne = Number($('#inputOne').val());
    let numberTwo = Number($('#inputTwo').val());

    // create an object to be sent to the empty array
    // on the server side
    let inputNumbers = {
        numberOne: numberOne,
        numberTwo: numberTwo
    }
    console.log('inputNumbers are', inputNumbers);
    
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: inputNumbers,
    }).then((response) => {
        console.log('POST /calculate', response);
        getCalculations();
    });
}

function clearInputFields() {
    console.log('in clearInputFields');
    
    // sets value of both inputs to an empty string
    $('#inputOne').val('');
    $('#inputTwo').val('');
}