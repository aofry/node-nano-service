var request = require('supertest');
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var HttpStatus = require('http-status-codes');


describe('server', function () {
    var app = express();
    app.set('port', process.env.PORT || 3000);
    var cookieParser = require('cookie-parser');
    app.use(cookieParser());
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    beforeEach(function () {

    });

    describe('root', function () {

        it('should check root works', function (done) {
            request(app)
                .get('/')
                .send({ email: 'adi', password: 'pass' })
                //.set('Accept', 'application/json')
                //.expect('Content-Type', /json/)
                .expect(function(res){
                    if (res.status == HttpStatus.OK)
                        done();

                })
                .end(done);
        });
    });


});