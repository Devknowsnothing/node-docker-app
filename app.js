const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello CoinOn");
});

// 3000, 8080, 8888, 8000
app.listen(8000, function(){
    console.log("app listening on port 3000");
});