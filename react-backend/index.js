const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    res.send({ express: 'OUR EXPRESS BACKEND IS CONNECTED TO REACT BITCHHH' });
    console.log('Sent request');
});
app.options('/api/highscore', cors())
app.post('/api/highscore'), cors(), (req, res) => {
    res.send('nice')
    console.log(req.body);
    console.log('post hit')
}

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);