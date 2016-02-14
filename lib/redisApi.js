var redis = require("redis");

client = redis.createClient(6379, process.env.REDIS_MASTER);

client.on("error", function (err) {
    console.log("Error " + err);
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