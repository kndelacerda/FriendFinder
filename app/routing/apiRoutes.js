module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(frienddata);
    });
    app.post("/api/friends", function(req, res) {
        res.json(true);
    });
};

console.log(frienddata);