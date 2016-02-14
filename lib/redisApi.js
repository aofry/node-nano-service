var redis = require("redis");

var redisLocation = process.env.REDIS_MASTER || "192.168.56.5";
client = redis.createClient(6379, redisLocation);

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