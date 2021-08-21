var app = require('../app');
var request = require('supertest');
var expect = require('chai').expect;

describe('App', function() {
    before(function(done) {
        app.listen(() => {
            done();
        });
    });

    it('should return success response', function(done) {
        request(app)
            .get('/flickr/fetch-image')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                expect(res.body.success).to.equal(true);
                expect(res.body.data).to.exist;
                expect(res.body.data).to.be.an('array');

                return done();
            });

    });

});
