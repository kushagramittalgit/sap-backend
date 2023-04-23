// import mongoose from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';
// import readline from 'readline';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import userSchema from './users/schemas/user.schema';
// import UserModel from './users/models/user.model';
// import { UserType } from './users/types';



// const MONGODB_URI = 'mongodb://localhost:27018/school-admin-system';


// const JWT_SECRET_KEY = 'mysecretkey';


// const options: any = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };


// mongoose.connect(MONGODB_URI, options).then(() => {
//   console.log('Connected to MongoDB!');
//   rl.question('Do you want to create a new user (1) or login (2)? ', async (answer) => {
//     if (answer === '1') {
//       createUser();
//     } else if (answer === '2') {
//       login();
//     } else {
//       console.log('Invalid input');
//       mongoose.connection.close();
//       rl.close();
//     }
//   });

// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// const createUser = async () => {
//   rl.question('Enter username: ', async (username) => {
//     try {
      
//       const existingUser = await UserModel.findOne({ username });
//       if (existingUser) {
//         console.log('User already exists');
//         rl.close();
//         return;
//       }

//       rl.question('Enter password: ', async (password) => {
//         rl.question('Is super admin? (true/false): ', async (isSuperAdmin) => {
//           try {
            
//             const hashedPassword = await bcrypt.hash(password, 10);

            
//             const newUser: UserType = {
//               _id: uuidv4(),
//               username,
//               password,
//               isSuperAdmin: isSuperAdmin === 'true',
//               createdAt: new Date(),
//               isActive: true,
//             };

            
//             const user = await UserModel.create(newUser);

//             console.log('New user created:', user);

//             mongoose.connection.close();
//             rl.close();
//           } catch (error) {
//             console.error('Error creating new user:', error);
//             mongoose.connection.close();
//             rl.close();
//           }
//         });
//       });
//     } catch (error) {
//       console.error('Error creating new user:', error);
//       mongoose.connection.close();
//       rl.close();
//     }
//   });
// };


// const login = async () => {
//   rl.question('Enter username: ', async (username) => {
//     rl.question('Enter password: ', async (password) => {
//       try {
        
//         const user = await UserModel.findOne({ username });

//         if (!user) {
//           console.log('Invalid username or password');
//           rl.close();
//           return;
//         }

        
//         const isPasswordMatch = user.password === password;
//         //await bcrypt.compare(password, user.password);

//         if (!isPasswordMatch) {
//           console.log('Invalid username or password');
//           rl.close();
//           return;
//         }

        
//         const token = jwt.sign({ username: user.username, isSuperAdmin: user.isSuperAdmin }, JWT_SECRET_KEY);

//         console.log('Token:', token);

//         console.log('Authenticated successfully');

//         mongoose.connection.close();
//         rl.close();
//       } catch (error) {
//         console.error('Error authenticating user:', error);
//         mongoose.connection.close();
//         rl.close();
//       }
//     });
//   });
// };
