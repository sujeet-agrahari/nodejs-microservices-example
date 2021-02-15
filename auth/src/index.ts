
import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined')
  }
     if (!process.env.MONGO_URI ) {
    throw new Error('MONGO_URI must be defined')
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => {
  console.log('Auth Service!!');
  console.log('Auth Service is up and running on 3000...');
});
}

start();