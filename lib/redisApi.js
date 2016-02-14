var redis = require("redis");

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });
client = redis.createClient(6379, "10.0.0.2");

client.on("error", function (err) {
    console.log("Error " + err);
});

var getCache = function(key, res) {
    client.get(key, function(err, reply) {
        // reply is null when the key is missing
        console.log("replay getCache: " + reply);
        if (err) {
            res(err, null);
        } else
            res(null, reply);
    });
};

var setCache = function(key, val) {
    client.set(key, val, redis.print);
};

/*
client.get("gege", function(err, reply) {
    // reply is null when the key is missing
    console.log("before settign: " + reply);
});

//console.log("before settign: " + client.get("bla"));
client.set("gege", "kake", redis.print);

client.get("gege", function(err, reply) {
    // reply is null when the key is missing
    console.log("before setting: " + reply);
});
*/
module.exports =  {
    get:getCache,
    set:setCache
};