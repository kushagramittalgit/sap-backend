/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('school-admin-system');
db.users.drop();
db.schoolusers.drop();
db.schools.drop();
db.standards.drop();
db.sections.drop();
db.students.drop();
//Insert a few documents into the sales collection.
db.getCollection('users').insertMany([
  { username: 'user1', password: 'pass1', issuperadmin: false,  status:'active'},
  { username: 'user2', password: 'pass2', issuperadmin: false,  status:'active' },
]);

db.getCollection('schoolusers').insertMany([
  { user_id: '643c1e0f910f7374814a8eac', role: 'admin' },
  { user_id: '643c1e0f910f7374814a8eac', role: 'teacher' },
  
]);

db.getCollection('sections').insertMany([
  { section_name: 'Section A', class_id: 'a24c904d-9931-4d67-b025-9939a7cb4542' },
  { section_name: 'Section B', class_id: 'a24c904d-9931-4d67-b025-9939a7cb4542' },
  ]);

db.getCollection('standards').insertMany([
  { class_name: '1' },
  { class_name: '2' }
]);

db.getCollection('students').insertMany([
  {
    student_name: 'teststudent',
    student_gender: 'Male',
    student_dob: '1998-01-01',
    student_contact: 1234567890,
    school_id: 'school_id_1',
    section_id: 'section B'
  },
  {
    student_name: 'Jane Doe',
    student_gender: 'Female',
    student_dob: '1999-02-02',
    student_contact: 2345678901,
    school_id: 'school_id_2',
    section_name: 'section A'
  }
]);

 db.getCollection('schools').insertMany([
  {
    school_name: 'testschool1',
  school_address : 'jaynagar',
  school_contact: 9845668742,
  
},
{
  school_name: 'testschool2',
  school_address : 'jp magar',
  school_contact: 9845668742,
  
},
 ]);
// db.getRoles({showBuiltinRoles:true}); (It shows the roles for particular database(usedb))
// db.createUser({
//   user:'school-admin-system',
//   pwd:'password',
//   roles:[{role:'userAdminAnyDatabase',db:school-admin-system},
//   {}]
// });

//mongo.ts
// export const getConnection = async (config?:{dbHost:String,dbPort,dbname,dbUsername?:String,dbpassword?:string})
// const dbHost=config?.dbHost ?? process.env.DATABASE_HOST;
// const appName = ''
// const url=''
// -connection code