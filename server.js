const express = require ('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use (bodyParser.urlencoded ({extended:false}));
app.use (bodyParser.json());
app.use (cors());
app.use (express.static('dist'));

//Set up the server
const port = 8082;
const server = app.listen (port, listening);
function listening () {
    console.log (`Running on localhost: ${port}`)
}

//GET
app.get ('/analyze', getData) 
function getData (req,res) {
    res.send ('dist/index.html')
}


//Set up API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const api = process.env.API_KEY;

//API request
app.post ('/analyze', getSentiment);
async function getSentiment (req, res) {
const sentiment = await fetch (`${baseURL}${api}&lang=auto&url=${req.body.formUrl}`, 
{method:'POST'});
try{
    const newData = await sentiment.json();
    res.send(newData);
} catch (error) {console.log('error', error)}
};