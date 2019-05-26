import { SuperTest, Test, agent } from 'supertest';

import { db } from '../src/config/connection/connection';
import Server from '../src/index';

describe('Company', () => {

  const serve: SuperTest<Test> = agent(Server);

  beforeAll(async () => {
    const user: any = { name: 'test', email: 'test2@email.com', password: '123' };

    await db.dropCollection('companymodel', () => console.log('\x1b[33m', 'MongoDB :: dropCollection - Company', '\x1b[0m'));
    await db.dropCollection('usermodel', () => console.log('\x1b[33m', 'MongoDB :: dropCollection - Users', '\x1b[0m'));

    await serve
      .post('/auth/signup')
      .send(user)
      .then((res) => {
        const obj: any = { logged: true, message: 'Sign in successfull', status: 200 };

        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject(obj);
      });
  });

  describe('/GET company', () => {
    it('it should GET all the companies', async () => {
      await serve
        .get('/v1/companies')
        .then((res) => {
          expect(res.status).toEqual(200);
        });
    });

  });
});
