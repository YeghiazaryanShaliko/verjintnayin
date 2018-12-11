var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("hello");
});
app.get("/name/:name", function (req, res) {
    res.redirect('http://google.com');

});

app.get("/google/:search", function (req, res) {
    var a = req.params.search;
    res.redirect('http://google.com/search?q='+a);
});
app.get("/*", function (req, res) {
    res.send("404");
});
app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
