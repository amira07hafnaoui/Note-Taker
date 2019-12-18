// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const path = require("path");
var express = require("express");
// create express app
var app = express();
// Sets an initial port. We"ll use this in our listener
var PORT = process.env.PORT || 3030;
 let noteCount = 1;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static files
app.use(express.static(path.join(__dirname, "public")));
// create a controller for our note app so we can handle the routes and the rendering of
// views then require the controllers (modules)
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Start the server & listen for requests
app.listen(PORT, function() {
    console.log('server is running and listening on http://localhost:' + PORT)
});
