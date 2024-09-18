/* var express = require('express');
var app = express();
var apicontroller = require("./crowdfunding-api/crowdfundingapi");
app.use("/api", apicontroller);
app.listen(3020);
console.log("Server is up and running on port 3020"); */
var express = require('express');
var cors = require('cors'); // Add this line
var app = express();
var apicontroller = require("./crowdfunding-api/crowdfundingapi");

app.use(cors()); // Enable CORS for all routes

app.use("/api", apicontroller);
app.listen(3020);
console.log("Server is up and running on port 3020");