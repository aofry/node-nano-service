var redis = require("redis"),
    client = redis.createClient(6379, "104.155.66.150");

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

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