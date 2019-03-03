// A GET Route to /survey (displays survey page)
//A default, catch-all route to home.html
var path = require("path");

module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });

}