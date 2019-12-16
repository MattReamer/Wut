const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express();
const mongoose = require('mongoose')
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => console.log("DB Connected"))
    .catch(e => console.log(e));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB database connection established successfully")
})
// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    res.send({ express: 'OUR EXPRESS BACKEND IS CONNECTED TO REACT BITCHHH' });
    console.log('Sent request');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log('App is listening on port ' + port);