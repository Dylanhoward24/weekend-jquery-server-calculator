console.log('running server.js');

// load the express library from node_modules/express
const express = require('express');
// load the body parser module
const bodyParser = require('body-parser');

// create our "app" (server)
const app = express();

// DATA GOES HERE
let operatorHistory = [];
let numberHistory = [];
let calculationHistory = [];

// tell express where to find all of our "public" files
// aka "client-side files" or "static assets"
app.use(express.static('./server/public'));

// setup body-parser which tells express how to read
// data from the client either as JSON or url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// listen for requests
const port = 5000;
app.listen(port, function() {
    // this is like our onReady function for the server
    console.log('App is up and running on localhost:5000');
});

app.get('/calculations', function(req, res) {
    console.log('ready to send some calculations');

    // send back information to be displayed on DOM
    res.send(calculationHistory);
});

app.post('/add', function(req, res) {
    console.log('we are adding!');
    let operatorToPass = req.body;
    operatorHistory.push(operatorToPass);
    console.log(operatorHistory);
    res.sendStatus(201);
});

app.post('/subtract', function(req, res) {
    console.log('we are subtracting!');
    let operatorToPass = req.body;
    operatorHistory.push(operatorToPass);
    res.sendStatus(201);
});

app.post('/multiply', function(req, res) {
    console.log('we are multiplying!');
    let operatorToPass = req.body;
    operatorHistory.push(operatorToPass);
    res.sendStatus(201);
});

app.post('/divide', function(req, res) {
    console.log('we are dividing!');
    let operatorToPass = req.body;
    operatorHistory.push(operatorToPass);
    res.sendStatus(201);
});

app.post('/calculate', function(req, res) {
    console.log('we are calculating!');
    let numbersToPass = req.body;
    numberHistory.push(numbersToPass);
    console.log('numbers to pass', numbersToPass);

    // convert numbers in the object to integer so math
    // can be done on the server side
    let firstNumber = Number(numbersToPass.numberOne);
    let secondNumber = Number(numbersToPass.numberTwo);
    
    if (operatorHistory[operatorHistory.length-1].operator === '+') {
        let equationToPass = {
            numberOne: firstNumber,
            numberTwo: secondNumber,
            operator: '+',
            answer: (firstNumber + secondNumber),
        };
      calculationHistory.push(equationToPass);
    }else if (operatorHistory[operatorHistory.length-1].operator === '-') {
        let equationToPass = {
            numberOne: firstNumber,
            numberTwo: secondNumber,
            operator: '-',
            answer: (firstNumber - secondNumber),
        };
      calculationHistory.push(equationToPass);
    }else if (operatorHistory[operatorHistory.length-1].operator === '*') {
        let equationToPass = {
            numberOne: firstNumber,
            numberTwo: secondNumber,
            operator: '*',
            answer: (firstNumber * secondNumber),
        };
      calculationHistory.push(equationToPass);
    }else if (operatorHistory[operatorHistory.length-1].operator === '/') {
        let equationToPass = {
            numberOne: firstNumber,
            numberTwo: secondNumber,
            operator: '/',
            answer: (firstNumber / secondNumber),
        };
      calculationHistory.push(equationToPass);
    }
    res.sendStatus(201);
})