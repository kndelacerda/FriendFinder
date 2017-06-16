var frienddata = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(frienddata);
    });
    app.post("/api/friends", function(req, res) {
        frienddata.push(req.body);
    });
};

// console.log(frienddata);