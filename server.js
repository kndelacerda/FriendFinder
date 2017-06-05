// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var prompt = require("prompt");
var inquirer = require("inquirer");

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var newFriends = [
    { name: "Kristen", hobby: "musician", interestedIn: "Sky diving" },
];

// Routes
// app.get("/icecreams/:name", function(req, res) {
//     res.render("/views/layouts/index.handlebars", icecreams[0]);
// });

// app.get("/weekend", function(req, res) {
//     res.render("index", lunches[1]);
// });

app.get("/icecreams/:name", function(req, res) {
    res.render("all-icecreams", {
        Icecream_List: icecreams,
    });
});

app.listen(PORT);