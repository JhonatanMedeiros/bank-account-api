import { db } from '../src/config/connection/connection';

process.env.NODE_ENV = 'test';
process.env.PORT = '3003';

import 'mocha';
import * as chai from 'chai';
import * as mongoose from 'mongoose';
import chaiHttp = require('chai-http');

import Server from '../src/index';

chai.use(chaiHttp);

const user: any = { name: 'test', email: 'test@email.com', password: '123' };


describe('Auth', () => {

  before((done) => {
    db.dropCollection('usermodel', () => {
      console.log('\x1b[33m', 'MongoDB :: dropCollection - Users', '\x1b[0m');
      done();
    });
  });

  describe('/POST Signup', () => {

    it('it should create user with success', (done) => {

      chai.request(Server)
        .post('/auth/signup')
        .send(user)
        .end((err, res) => {
          chai.expect(err).to.be.equal(null);
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.logged).to.be.an('boolean');
          chai.expect(res.body.logged).to.be.equal(true);
          chai.expect(res.body.message).to.be.an('string');
          chai.expect(res.body.message).to.be.equal('Sign in successfull');
          done();
        });
    });

    it('it should an exist registered user', (done) => {

      chai.request(Server)
        .post('/auth/signup')
        .send(user)
        .end((err, res) => {
          chai.expect(err).to.be.equal(null);
          chai.expect(res).to.have.status(400);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.be.an('string');
          chai.expect(res.body.message).to.be.equal('Error: This email already exists');
          done();
        });
    });

  });

  describe('/POST Login', () => {

    it('it should login user with success', (done) => {

      chai.request(Server)
        .post('/auth/login')
        .send(user)
        .end((err, res) => {
          chai.expect(err).to.be.equal(null);
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.logged).to.be.an('boolean');
          chai.expect(res.body.logged).to.be.equal(true);
          chai.expect(res.body.message).to.be.an('string');
          chai.expect(res.body.message).to.be.equal('Sign in successfull');
          done();
        });
    });

    it('it should login user with invalid credentials', (done) => {

      chai.request(Server)
        .post('/auth/login')
        .send({ email: 'ivalid_user@email.com', password: '123' })
        .end((err, res) => {
          chai.expect(err).to.be.equal(null);
          chai.expect(res).to.have.status(401);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.logged).to.be.an('boolean');
          chai.expect(res.body.logged).to.be.equal(false);
          chai.expect(res.body.status).to.be.an('number');
          chai.expect(res.body.status).to.be.equal(401);
          chai.expect(res.body.message).to.be.an('string');
          chai.expect(res.body.message).to.be.equal('Invalid credentials!');
          done();
        });
    });

  });

});
