import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface User {
  //_id: string;
  //uuid: string;
  username: string;
  password: string;
  isSuperAdmin: boolean;
  createdAt: Date;
  isActive: boolean;
}

const userSchema = new mongoose.Schema<User>({
  //_id: { type: String, default: uuidv4 },
 //uuid: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  isSuperAdmin: { type: Boolean, required: true },
  createdAt: { type: Date, required: true },
  isActive: { type: Boolean, required: true },
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
