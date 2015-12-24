var express = require('express');

var app = express();
app.get('/', function(req, res){
  res.send("Hello Node");
});

app.listen(3000, function(){
  console.log('please open http://localhost:3000, app is listening at port 3000');
})
