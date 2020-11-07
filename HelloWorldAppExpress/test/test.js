var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('/GET book', () => {
  it('it should GET all the books', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
              //res.body.should.be.a('array');
              //res.body.length.should.be.eql(0);
          done();
        });
  });
});
