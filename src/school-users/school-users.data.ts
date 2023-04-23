// import { Types } from 'mongoose';
// import * as uuid from 'uuid';
// import { User } from '../users/schemas';
// import { SchoolUser } from '../school-users/schemas';
// import { UserData } from "../users/user.data";
// import { Common } from '../common';

// async function createSchoolUser(userId: string, role: string) {
//   // Fetch the user by id
//   const user = await UserData.getUserById(userId);
//   if (!user) {
//     throw new Error(`User with id ${userId} not found`);
//   }

//   // Create the school user document
//   const schoolUser = new SchoolUser({
//     user_id: user._id.toString(), // Use the _id from the fetched user
//     role,
//     school_id: uuid.v4(), // Generate the school_id using uuid
//   });

//   await schoolUser.save();

//   return schoolUser.toObject();
// }


// // Get school user by user ID
// const getUserById = async (userId: string) => {
//   const connection = await Common.Mongo.getConnection();
//   return await SchoolUser.findById(userId);
// };

// // Get school user by school ID
// const getBySchoolId = async (schoolId: string) => {
//   const connection = await Common.Mongo.getConnection();
//   return await SchoolUser.findOne({ school_id: schoolId });
// };

// // Get school users
// const getSchoolUsers = async () => {
//   const connection = await Common.Mongo.getConnection();
//   return await SchoolUser.find();
// };

// //Get by SchoolRole
// const getBySchoolRole = async (schoolId: string, role: string) => {
//   const connection = await Common.Mongo.getConnection();
//   return await SchoolUser.find({ school_id: schoolId, role: role });
// };


// // Remove school user by school ID
// const deleteSchoolUserById = async (userId: string) => {
//   const connection = await Common.Mongo.getConnection();
//   const result = await SchoolUser.deleteOne({ user_id: userId });
//   console.log(result);
//   return result.deletedCount;
// };



// export const SchoolUserData = { 
//   createSchoolUser,
//   getUserById,
//   getBySchoolId,
//   getSchoolUsers,
//   getBySchoolRole,
//   deleteSchoolUserById,
  
// };
