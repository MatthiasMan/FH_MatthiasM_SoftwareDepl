var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

var assertChai = chai.assert;

chai.use(chaiHttp);
describe('/GET', () => {
  it('it should status 200 and return hello world', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
              //res.should.have.property('str')
              //assertChai.lengthOf(res.body, 1);
              res.body.should.eq('Hello World!');
              //res.body.should.eq('Hello World!');
              //res.body.should.have.lengthOf(3);
          done();
        });
  });
});


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});