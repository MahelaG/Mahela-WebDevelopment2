var express = require('express');
var cors = require('cors'); // Add this line
var app = express();
var apicontroller = require("./crowdfunding-api/crowdfundingapi");
var path = require('path');
// var bodyParser = require('body-parser');
//to parse URL - encode data
// app.use(bodyParser.urlencodede({extended:true}));

app.use("/api", apicontroller);

//to serve static files
app.use(express.static(__dirname));

//rote to server index.html
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/index.html'))
});

//rote to server search.html
app.get('/search',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/search.html'))
});

app.get('/search.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/search.js'))
});

app.get('/styles.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/styles.css'))
});

app.get('/home.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/home.js'))
});

app.get('/fundraiser',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/fundraiser.html'))
});

app.get('/fundraiser.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/fundraiser.js'))
});

app.use(cors()); // Enable CORS for all routes


app.listen(3020);
console.log("Server is up and running on port 3020");