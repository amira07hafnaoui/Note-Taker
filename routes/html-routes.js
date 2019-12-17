var path = require("path");
// Routes
// module.exports = function(app) {
//     // return notes.html file
//     app.get("/notes", function(req, res) {
//         res.sendFile(path.join(`${__dirname}/../public`, "notes.html"));
//     });

//     app.get("*", function(req, res) {
//         res.sendFile(path.join(`${__dirname}/../public`, "index.html"));
//     });

// }

module.exports = function (app) {
// return notes.html file
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // If no matching route is found default to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}