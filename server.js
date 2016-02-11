var express = require('express');
var app = express();
var counter = 0;

app.get('/', function (req, res) {
    console.log('Sending result for: ' + counter);
    res.send('Hello World! Simulating rolling update. Call num: ' + counter++);
});

app.listen(3000, function () {
    console.log('Example app2 listening on port 3000!');
});