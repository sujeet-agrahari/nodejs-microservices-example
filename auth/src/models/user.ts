import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the props required to create a User
interface UserAttrs {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}) 

// An interface that describes the props a User model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the props a User document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

userSchema.pre('save', async function(done) {
  if (this.isDirectModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
    done();
  }
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };