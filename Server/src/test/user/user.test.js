import request from 'supertest';
import { expect } from 'chai';
import server from '../../../server';

describe('User test', () => {
 it('Sign up as admin', (done) => {
  request(server)
  .post('/api/v1/auth/signup')
  .send({
   email: 'admin@gmail.com',
   first_name: 'admin',
   last_name: 'user',
   password: 'password',
   address: 'admin block',
  })
  .end((err, res) => {
   expect(res.status).to.equal(201);
   expect(res.body.message).to.equal('Hey there, Welcome!');
   expect(res.body.email).to.equal('admin@gmail.com');
   expect(res.body.address).to.equal('admin block');
   done();
  })
 })

 
})