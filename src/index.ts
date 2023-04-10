// import mongoose from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';
// import readline from 'readline';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import UserModel, { User } from './models/users';

// // MongoDB Connection URI
// const MONGODB_URI = 'mongodb://localhost:27018/school-admin-system';

// // JWT Secret Key
// const JWT_SECRET_KEY = 'mysecretkey';

// // Connect options
// const options : any = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// // Connect to MongoDB
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

// // Create a readline interface for reading user input
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Prompt the user for input and create a new user
// const createUser = async () => {
//   rl.question('Enter username: ', async (username) => {
//     try {
//       // Check if the user already exists
//       const existingUser = await UserModel.findOne({ username });
//       if (existingUser) {
//         console.log('User already exists');
//         rl.close();
//         return;
//       }

//       rl.question('Enter password: ', async (password) => {
//         rl.question('Is super admin? (true/false): ', async (isSuperAdmin) => {
//           try {
//             // Hash the password
//             const hashedPassword = await bcrypt.hash(password, 10);

//             // Create a new user object
//             const newUser: User = {
//               _id: uuidv4(),
//               username,
//               password: hashedPassword,
//               isSuperAdmin: isSuperAdmin === 'true',
//               createdAt: new Date(),
//               isActive: true,
//             };

//             // Save the new user to the database
//             const user = await UserModel.create(newUser);

//             console.log('New user created:', user);

//             // Generate a JWT token for the new user
//             const token = jwt.sign({ username: user.username, isSuperAdmin: user.isSuperAdmin }, JWT_SECRET_KEY);

//             console.log('Token:', token);

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

// // Authenticate the user with the given username and password
// const login = async () => {
//   rl.question('Enter username: ', async (username) => {
//     rl.question('Enter password: ', async (password) => {
//       try {
//         // Find the user in the database
//         const user = await UserModel.findOne({ username });

//         if (!user) {
//           console.log('Invalid username or password');
//           rl.close();
//           return;
//         }

//         // Compare the password with the hashed password in the database
//         const isPasswordMatch = await bcrypt.compare(password, user.password);

//         if (!isPasswordMatch) {
//           console.log('Invalid username or password');
//           rl.close();
//           return;
//         }

//         // Generate a JWT token for the user
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
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';


const MONGODB_URI = 'mongodb://localhost:27018/school-admin-system';


const options : any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


mongoose.connect(MONGODB_URI, options).then(() => {
  console.log('Connected to MongoDB!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


const app = express();


app.use(bodyParser.json());


app.use('/users', userRoutes);

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});