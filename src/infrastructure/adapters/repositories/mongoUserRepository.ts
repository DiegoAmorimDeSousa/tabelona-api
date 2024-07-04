import { UserRepositoryPort } from '../../../app/ports/userRepositoryPort';
import { User } from '../../../domain/entities/user';
import mongoose, { Document, Schema } from 'mongoose';

interface UserDocument extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export class MongoUserRepository implements UserRepositoryPort {
  async createUser(user: User): Promise<User> {
    const userDoc = new UserModel({ name: user.name, email: user.email });
    await userDoc.save();
    return new User(userDoc.id, userDoc.name, userDoc.email);
  }

  async getUserById(id: string): Promise<User | null> {
    const userDoc = await UserModel.findById(id);
    if (!userDoc) return null;
    return new User(userDoc.id, userDoc.name, userDoc.email);
  }

  async getAllUsers(): Promise<User[]> {
    const userDocs = await UserModel.find();
    return userDocs.map(userDoc => new User(userDoc.id, userDoc.name, userDoc.email));
  }
}
