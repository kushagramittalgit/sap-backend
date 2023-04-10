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

// Insert a few documents into the sales collection.
db.getCollection('users').insertMany([
  {uuid: 'c5baa5b1-7f9d-46e7-8ace-044d30720c02', username: 'user1', password: 'pass1', isSuperAdmin: false, createdAt: new Date(), isActive: true },
  {uuid: '459e2a9b-8507-425d-be17-3ea9a302c84e', username: 'user2', password: 'pass2', isSuperAdmin: false, createdAt: new Date(), isActive: true },
]);


