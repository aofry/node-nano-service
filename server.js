var express = require('express');
var cache = require('./lib/redisApi.js');

var app = express();

var data = {
    redisMasterLocation: process.env.REDIS_MASTER,
    counter: 0,
    serverBootTime: new Date(),
    serverListenPort: process.env.PORT || 3000,
    dumbServiceUrl: process.env.DUMB_SERVICE_URL
};

app.get('/', function (req, res) {

    console.log('Sending result for: ' + data.counter);
    console.log('redis location: ' + data.redisMasterLocation);

    if (cache) {
        cache.get("time", function(err, cacheReturnRes) {
            //console.log("got result: " + cacheReturnRes);
            if (cacheReturnRes) {
                data.date = cacheReturnRes;
                res.send(data);
            } else
                res.send(data);
            cache.set("time", new Date() + '');
        });

    } else
        res.send(data);

    data.counter++;
});

app.listen(data.serverListenPort, function () {
    console.log('Example app2 listening on port 3000!');
});