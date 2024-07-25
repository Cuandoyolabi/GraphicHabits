let express = requiere("express");
let mysql = require("mysql");
let app = express();

app.listen(3000, function(){
    console.log('app listening on port 3000');
});