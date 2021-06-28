//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET Test the api', () => {
    it('It should response the GET method', (done) => {
      chai.request(server)
          .get('/api/')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                // res.body.length.should.be.eql(1);
                res.body.should.have.property('date');
                res.body.title.should.be.eql('Docker Express JS App');
                res.body.status.should.be.eql(true);
            done();
          });
    });
});


describe('/GET Test the api request', () => {
    it('It should response the GET method', (done) => {
      chai.request(server)
          .get('/api/request')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('date');
                res.body.title.should.be.eql('Docker Express JS App');
                res.body.should.have.property('title').eql('Docker Express JS App');
                res.body.request.should.be.a('object');

                res.body.request.method.should.be.a('string');
                res.body.request.url.should.be.a('string');
                res.body.request.url.should.be.eql('/api/request');
                res.body.request.url.length.should.be.eql(12);
                res.body.request.params.should.be.a('object');
                res.body.request.query.should.be.a('object');
                res.body.request.headers.should.be.a('object');
                res.body.request.cookies.should.be.a('object');
                res.body.request.body.should.be.a('object');

            done();
          });
    });
});
