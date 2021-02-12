import request from 'supertest';
import { app } from '../../app';


it('fails when incorrect password is provided', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'invalid-password'
    })
    .expect(400);
})

it('fails when a email that doesn not exist is provided', async () => {
  return await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
})

it('sets a cookie after successfull signin', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200);
  expect(response.get('Set-Cookie')).toBeDefined();
})