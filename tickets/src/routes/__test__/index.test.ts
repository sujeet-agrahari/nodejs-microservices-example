import request from 'supertest';
import { app } from '../../app';

interface ticketAttr {
  title: string;
  price: number;
}
const createTicket = ({
  title,
  price,
}: ticketAttr) => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title, price
    })
}
it('can fetch a list of tickets', async () => {
  await createTicket({
    title: 'First Title',
    price: 10,
  });
  await createTicket({
    title: 'Second Title',
    price: 20,
  });
    await createTicket({
    title: 'Third Title',
    price: 30,
  });

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

  expect(response.body.length).toEqual(3);
})