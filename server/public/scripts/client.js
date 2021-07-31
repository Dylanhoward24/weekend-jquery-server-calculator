$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

 ///// console.log('equalsBtn', $('equalsBtn'));
    // run a function when = button is pressed
    $('#equalsBtn').on('click', calculateEquation);
}

function calculateEquation() {
    console.log('inside calculateEquation');
    
    
}