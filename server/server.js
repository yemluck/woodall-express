/**
 * this code is running on Web hoster's computer
 */


const express = require('express');

//express is a function
// that returns an 'app' object
const app = express();



app.use(express.static('server/public'));


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

// GET /comments endpoint
/// localhost:5000/comments
app.get('/comments', (req, res) => {
res.send([
    {
        author: 'Chris',
        message: 'New Space jams rocks, 1996 sucks'
    }
])
});


// Listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log('I\'m listening')
    
   
    
});

