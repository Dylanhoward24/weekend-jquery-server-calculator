# Weekend jQuery Server Calculator

[ ] Build a server-side calculator (logic must be on server-side)
    [X] Inintial setup
        [X] Create server folder
            [X] Create public folder
                [X] Create a scripts folder
                    [X] Create client.js file
                    [X] Create jQuery.js file
                [X] Create index.html file
            [X] Create server.js file
        [X] Run commands from terminal
            [X] npm init --yes
            [X] npm install express
    [X] Create user interface where user can input two values
    [X] Create 4 buttons with + - * / selections
    [ ] Create an = button
        [X] Captures input
        [X] Bundles input up into object
        [X] Sends object to the server via POST
    [ ] Create a "C" button
        [ ] Clears the input fields
    [X] Build out server-side logic to compute the numbers
    [X] Send back "OK" when calculation is complete
    [X] GET request after the POST to get the actual calculation
    [X] Keep a historical record of all solutions on the server
        [X] Display a list of all previous calculations when pages loads using a GET request
        [X] Update the list when a new calculation is made
        **history should exist even after refreshing the page... it's expected that the
        history will go away after restarting the server**

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
