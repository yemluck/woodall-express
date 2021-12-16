/**
 * this code is running on Web hoster's computer
 */


const express = require('express');
const bodyParser = require('body-parser');

//express is a function
// that returns an 'app' object
const app = express();



app.use(express.static('server/public'));

// Don't forget body-parser!
// https://i.imgur.com/qs0INo4.jpg
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup a GET /space-jams endpoint
// Endppint === method + URL
// http://localhost:5000/space-jams
app.get('/space-jams', (req, res)=> {
    console.log('\'bout to get some space jams');

     // Send back a response
    res.send(`
    <h1>Ready to Space Jam?</h1>
    <button> Jam Time </button>
    `)
});

let comments = [
    {
        author: 'Chris',
        message: 'New Space jams rocks, 1996 sucks'
    }
]
// GET /comments endpoint
/// localhost:5000/comments
app.get('/comments', (req, res) => {
    console.log('in GET /comments')
res.send(comments)
});

// POST /comments endpoint
app.post('/comments', (req, res) => {
    console.log('in POST /comments', req.body);

    // Add the comment to our array
    comments.push(req.body)

    // TODO: save the comment to the server

    // send back a :thumbsign
    res.sendStatus(201);

});







// Listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log('I\'m listening')
    
   
    
});

