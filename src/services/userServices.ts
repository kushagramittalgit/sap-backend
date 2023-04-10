import UserModel, { User } from '../models/users';
import bcrypt from 'bcrypt';

export const createUser = async (username: string, password: string, isSuperAdmin: boolean): Promise<User> => {
 
  const existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    throw new Error('User already exists');
  }

    const hashedPassword = await bcrypt.hash(password, 10);


  const newUser: User = {
    username,
    password: hashedPassword,
    isSuperAdmin,
    createdAt: new Date(),
    isActive: true,
  };

  
  const user = await UserModel.create(newUser);

  return user;
};

export const getUserByUsernameAndPassword = async (username: string, password: string): Promise<User | null> => {
  // Find the user in the database
  const user = await UserModel.findOne({ username });

  if (!user) {
    return null;
  }

  // Compare the password with the hashed password in the database
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return null;
  }

  return user;
};
