var express = require('express');
var cache = require('./lib/redisApi.js');

var app = express();
var counter = 0;

app.get('/', function (req, res) {
    var redisLocation = process.env.REDIS_MASTER;
    console.log('Sending result for: ' + counter);
    console.log('redis location: ' + redisLocation);

    if (cache) {
        cache.get("time", function(err, cacheReturnRes) {
            //console.log("got result: " + cacheReturnRes);
            if (cacheReturnRes) {
                res.send('Redis Location = ' + redisLocation + ' date from redis = ' + cacheReturnRes + '. Call num: ' + counter++);
            } else
                res.send('Redis Location = ' + redisLocation + '. Call num: ' + counter++);
            cache.set("time", new Date() + '');
        });

    } else
        res.send('Redis Location = ' + redisLocation + '. Call num: ' + counter++);
});

app.listen(3000, function () {
    console.log('Example app2 listening on port 3000!');
});