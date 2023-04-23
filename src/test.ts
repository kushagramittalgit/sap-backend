import { getConnection } from './common/mongo';
import { SchoolUser } from './school-users/schemas';
import { School } from './school/schemas';
import { User } from './users/schemas/user.schema';
import mongoose from 'mongoose';
 
 const dbOptions : any = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 };
 
 (async () => {
   try {
    //  await mongoose.connect('mongodb://localhost:27018/school-admin-system', dbOptions);
    //  console.log('MongoDB Connected');
    await getConnection()

     //Get UserById

    //  const userId = '0952cc95-6558-4b8a-b994-a8ef7050db98';
    //  const user = await User.findById(userId);
    //  console.log(user);

     // Create User

    //  const newUser : any = {
    //    username: 'example2',
    //    password: 'password2',
    //    issuperadmin: false,
    //    status: 'disabled',
    //  };
 
    //  try {
    //    const createdUser = await User.createUser(newUser);
    //    console.log(createdUser);
    //  } catch (error) {
    //    console.error(error);
    //  }

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
  //      school_name: 'testschool',
  //      school_state : 'telangana',
  //      school_city : 'vizag',
  //      school_contact: 9845668456,      
  //    };   
  //    const createdSchool = await School.createSchool(newSchool);
  //    console.log(createdSchool);
    
  //getbyschoolId
    //  const schoolId = '7f051d5e-bfed-4df4-be45-a66136acb058';
    //  const school = await School.findById(schoolId);
    //  console.log(school);
 
    //create schoolUsers
    // const newSchoolUser : any = {
    //        user_id: '0952cc95-6558-4b8a-b994-a8ef7050db98',
    //        school_id : '7f051d5e-bfed-4df4-be45-a66136acb058',
    //        role : 'student',
    //        status: 'Active',      
    //      };   
    //      const createdSchool = await SchoolUser.createSchoolUser(newSchoolUser);
    //      console.log(createdSchool);

    //Get UsersBySchoolId
    const schoolId = '7f051d5e-bfed-4df4-be45-a66136acb058';
    const users = await SchoolUser.getUsersBySchoolId(schoolId);
    console.log(users);

    }catch (err) {
    console.log('Error connecting to MongoDB', err);
  }
  if(mongoose.connection.readyState === 1){
    mongoose.connection.close();
  }
  
})();