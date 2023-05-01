/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getConnection } from './common/mongo';
import { User } from './users/schemas/user.schema';
import mongoose from 'mongoose';
import { UserType } from './users/types';
import { MongoClientOptions } from 'mongodb';
import { School } from './school/schemas';
import { SchoolUser } from './school-users/schemas';
import { SchoolUserType } from './school-users/types';

// todo: see the real type of below object in place of `any`
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27018/school-admin-system');
    //  console.log('MongoDB Connected');
    await getConnection();

    //Get UserById

    const userId = '0f1ea757-040f-445b-8601-ab8210c62d23';
    const user = await User.findById(userId);
    console.log(user);

    // Create User

    // const newUser: UserType = {
    //   username: 'example 3',
    //   password: 'password 3',
    //   isSuperAdmin: true,
    //   status: 'active',
    // };

    // try {
    //   const createdUser = await User.createUser(newUser);
    //   console.log(createdUser);
    // } catch (error) {
    //   console.error(error);
    // }

    // Disable user

    // const userId = '93019466-3d83-4721-b150-f938c8461017';
    // const isDisabled = await User.disableUser(userId);
    // console.log(isDisabled);

    // Activate user

    // const userId = '93019466-3d83-4721-b150-f938c8461017';
    // const isActive = await User.activateUser(userId);
    // console.log(isActive);

    // Remove user

    // const userId = '644421530b1c73679e252cd8';
    // const isRemoved = await User.removeUser(userId);
    // console.log(isRemoved);

    // Change password

    // const userId = '93019466-3d83-4721-b150-f938c8461017';
    // const newPassword = 'newpassword';
    // const isPasswordChanged = await User.changePassword(userId, newPassword);
    // console.log(isPasswordChanged);

    // GetUsers

    // const users = await User.getUsers(1, 2);
    //     console.log(users);
    //   }
    // Create School
    // const newSchool : any = {
    //   school_name: 'testschool1',
    //   school_state : 'Andhra Pradesh',
    //   school_city : 'Hyd',
    //   school_contact: 9845668426,
    // };
    // const createdSchool = await School.createSchool(newSchool);
    // console.log(createdSchool);

    //getbyschoolId
    //  const schoolId = '7f051d5e-bfed-4df4-be45-a66136acb058';
    //  const school = await School.findById(schoolId);
    //  console.log(school);

    //create schoolUsers
    // const newSchoolUser : SchoolUserType = {
    //   user_id: '0f1ea757-040f-445b-8601-ab8210c62d23',
    //   school_id : 'd57fcb6c-b631-4872-9e5d-751be9468998',
    //   status: 'active',
    //   role:'schooladmin',
    // };
    // try {
    //   const createdSchoolUser = await SchoolUser.createSchoolUser(newSchoolUser);
    //   console.log(createdSchoolUser);
    // } catch (error) {
    //   console.error(error);
    // }
    
    //Get SchoolUsersByid
    // const schoolId = '7f6ab498-c75e-40fe-b970-4efff55f2fc9';
    // const users = await SchoolUser.getUsersBySchoolId(schoolId);
    // console.log(users);

    //Get Users by schoolid

    // const schooluserId = '490c5219-2d68-42e6-afab-e1e074e0aaf0';
    // const users = await SchoolUser.getSchoolUserById(schooluserId);
    // console.log(users);
  } catch (err) {
    console.log('Error connecting to MongoDB', err);
  }
  if (mongoose.connection.readyState === 1) {
    mongoose.connection.close();
  }
})();

