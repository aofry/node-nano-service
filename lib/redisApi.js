var redis = require("redis");

var redisLocation = process.env.REDIS_MASTER || "192.168.56.5";
var port = process.env.REDIS_PORT || 6379;

client = redis.createClient(port, redisLocation, {no_ready_check: true});

if (process.env.REDIS_PASSWORD)
    client.auth(process.env.REDIS_PASSWORD, function (err) {
        if (err)
            throw err;
    });


client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', function() {
    console.log('Connected to Redis');
});

var getCache = function(key, res) {
    client.get(key, function(err, reply) {
        // reply is null when the key is missing
        //console.log("replay getCache: " + reply);
        if (err) {
            res(err, null);
        } else
            res(null, reply);
    });
};

var setCache = function(key, val) {
    client.set(key, val, redis.print);
};


module.exports =  {
    get:getCache,
    set:setCache
};