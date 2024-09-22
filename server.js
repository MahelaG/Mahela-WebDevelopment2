var express = require('express');
var cors = require('cors'); // Add this line
var app = express();
var apicontroller = require("./crowdfunding-api/crowdfundingapi");
var path = require('path');


app.use("/api", apicontroller);

//to serve static files
app.use(express.static(__dirname));

//route to server index.html
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/index.html'))
});

//route to server search.html
app.get('/search',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/search.html'))
});

//route to server search.js
app.get('/search.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/search.js'))
});

//route to server styles.css
app.get('/styles.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/styles.css'))
});

//route to server home.js
app.get('/home.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/home.js'))
});

//route to server fundraiser.html
app.get('/fundraiser',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/fundraiser.html'))
});

//route to server fundraiser.js
app.get('/fundraiser.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/html/fundraiser.js'))
});

app.use(cors()); // Enable CORS for all routes


app.listen(3020);
console.log("Server is up and running on port 3020");