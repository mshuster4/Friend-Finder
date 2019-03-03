// A GET route with the url /api/friends which displays JSON of possible friends
// A POST route /api/friends which handles incoming survey results.  Also handles the compatibility logic
var friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get('/api/survey', function (req, res){
        res.json(friendsData);
    });

    app.post('/api/survey', function(req, res) {

        var newfriend = req.body;

        console.log(newfriend);

        friendsData.push(newfriend);

        for (var i = 0; i < friendsData.length; i++) {

            console.log(friendsData[i].scores);
        }

        res.json(newfriend); 
        

    })
}