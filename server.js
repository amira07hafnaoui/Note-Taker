// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const path = require("path");
var express = require("express");
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3030;

let noteCount = 1;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// configuring routes for HTTP requests.
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Start the server & listen to incoming requests
app.listen(PORT, function() {
    console.log('server is running and listening on http://localhost:' + PORT)
});
