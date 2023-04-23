// import { Common } from '../common';
// import { User } from './schemas/user.schema';
// import { UserType } from './types/user.type';


// const createUser = async (user: UserType) => {
//   const newUser = new User(user);
//   const connection = await Common.Mongo.getConnection();
//   return newUser.save();
// };

// const changeUserPassword = async (userId: string, newPassword: string) => {
//   const connection = await Common.Mongo.getConnection();
//   const user = await User.findById(userId);
  
//   if (!user) {
//     throw new Error('User not found');
//   }
  
//   user.password = newPassword;
//   return user.save();
// };

// const getUsers = async () => {
//   const connection = await Common.Mongo.getConnection();
//   return await User.find();
// };

// const getUserById = async (userId: string) => {
//   const connection = await Common.Mongo.getConnection();
//   return await User.findById(userId);
// };

// const getUserByUsername = async (username: string) => {
//   const connection = await Common.Mongo.getConnection();
//   return await User.findOne({ user_username: username });
// };

// const deleteUser = async (userId: string) => {
//   const connection = await Common.Mongo.getConnection();
//   return await User.findByIdAndDelete(userId);
// };


// export const UserData = {
//   getUsers,
//   createUser,
//   getUserById,
//   getUserByUsername,
//   changeUserPassword,
//   deleteUser
// };
