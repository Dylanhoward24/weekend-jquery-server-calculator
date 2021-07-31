console.log('running server.js');

// load the express library from node_modules/express
const express = require('express');
// load the body parser module
const bodyParser = require('body-parser');

// create our "app" (server)
const app = express();

// DATA GOES HERE


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
