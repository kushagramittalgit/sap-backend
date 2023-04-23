// import { Common } from "../common";
// import { School } from "./schemas/school.schema";
// import { SchoolType } from "./types/school.type";


// const createSchool = async (school: SchoolType) => {
//     const newStudent = new School(school);
//     const connection = await Common.Mongo.getConnection();
//     return newStudent.save();
//   };
//   const getSchools = async () => {
//     const connection = await Common.Mongo.getConnection();
//     return await School.find();
//   };
  
//   const deleteSchool = async (schoolId: string) => {
//     const connection = await Common.Mongo.getConnection();
//     return await School.findByIdAndDelete(schoolId);
//   };
//   const getSchoolById = async (schoolId: string) => {
//     const connection = await Common.Mongo.getConnection();
//     return await School.findOne({_id: schoolId});
//   };
  



//   export const SchoolData = {
//     createSchool,
//     getSchools,
//     deleteSchool,
//     getSchoolById
//  };
  