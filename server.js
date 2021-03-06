var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

//heroku only serves http not https
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('dist'));



app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
