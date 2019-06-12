import { SuperTest, Test, agent } from 'supertest';

import { db } from '../src/config/connection/connection';
import Server from '../src/index';

describe('Auth', () => {

  const user: any = { name: 'test', email: 'test@email.com', password: '123' };
  const serve: SuperTest<Test> = agent(Server);

  beforeAll(async () => {
    await db.dropCollection('usermodel', () => {
      console.log('\x1b[33m', 'MongoDB :: dropCollection - Users', '\x1b[0m');
    });
  });

  afterAll((done) => {
    Server.close(done());
  });

  describe('/POST Signup', () => {

    it('it should create user with success', async () => {

      await serve
        .post('/auth/signup')
        .send(user)
        .then((res) => {
          expect(res.status).toEqual(200);
        });
    });

    it('it should an exist registered user', async () => {

      await serve
        .post('/auth/signup')
        .send(user)
        .then((res) => {
          expect(res.status).toEqual(400);
        });
    });

  });

  describe('/POST Login', () => {

    it('it should login user with success', async () => {

      await serve
        .post('/auth/login')
        .send(user)
        .then((res) => {
          expect(res.status).toEqual(200);
        });
    });

    it('it should login user with invalid credentials', async () => {

      await serve
        .post('/auth/login')
        .send({ email: 'ivalid_user@email.com', password: '123' })
        .then((res) => {
          expect(res.status).toEqual(401);
        });
    });

  });

});
