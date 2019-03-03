// A GET route with the url /api/friends which displays JSON of possible friends
// A POST route /api/friends which handles incoming survey results.  Also handles the compatibility logic
var friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get('/api/survey', function (req, res){
        rest.json(friendsData);
    })
}