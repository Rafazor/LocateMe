var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/search", function(req, res){
    var query = req.query.search;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=2f959a504378f8e91a4864b4bad6d80e";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("search", {data: data});
        }
    });  
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Start!!!");
});