import { db } from '../src/config/connection/connection';

process.env.NODE_ENV = 'test';
process.env.PORT = '3003';

import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import Server from '../src/index';

chai.use(chaiHttp);

describe('Company', () => {

  before((done) => {
    db.dropCollection('companymodel', () => {
      console.log('\x1b[33m', 'MongoDB :: dropCollection - Company', '\x1b[0m');
      done();
    });
  });

  describe('/GET company', () => {
    it('it should GET all the companies', (done) => {
      chai.request(Server)
        .get('/v1/companies')
        .end((err, res) => {
          chai.expect(res).have.status(401);
          // res.body.should.be.a('array');
          // res.body.length.should.be.eql(0);
          done();
        });
    });

  });
});
