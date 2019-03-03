var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 8080;

var app = express();

require("./app/routing/apiRoutes.js") (app);
require("./app/routing/htmlRoutes.js") (app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});