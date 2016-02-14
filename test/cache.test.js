var assert = require('assert');
var cache = require('../lib/redisApi.js');

describe('cache', function () {

    describe('cache set & get', function () {
        it('should check that cache can be set without an error', function () {
            cache.set("mykey", "myval");
        });

        it('should check that cache can be get without an error', function (done) {
            cache.get("mykey", function(err, cacheReturnRes) {
                //console.log("got result: " + cacheReturnRes);
                if (cacheReturnRes)
                    assert(cacheReturnRes == "myval", "actual result from cache")
                done(err);
            });
        });
    })
});
