const chai = require('chai');
const expect = chai.expect;
const request = require('superagent');
const status = require('http-status');

const apiRoot = 'http://localhost:3000/';

describe ('hello API', function() {
    var server;

    before (function (done) {
        const express = require('express');
        var app = express();
        app.use('/',require('../routes/hello'));
        const port = 3000;
        server = app.listen(port,function(){done();});
    });

    after (function (){
        server.close();
    });

    it('GET request returns test "Hello, World!".', function(done) {
        request.get(apiRoot)
        .end(function(err,res) {
            expect(err).to.not.be.an('error');
            expect(res.statusCode).to.equal(status.OK);
            expect(res.text).to.equal('Hello, World!');
            done();
        });
    });


    it('POST request returns test "Sucessful Post!".', function(done) {
        request.post(apiRoot).end(function(err,res) {
            expect(err).to.be.an('error');
            expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
            done();
        });
    });
});