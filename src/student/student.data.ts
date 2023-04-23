import { Common } from '../common';
import { Section } from '../section/schemas';
import { Student } from './schemas/student.schema';
import { StudentType } from './types/student.type';


const createStudent = async (student: StudentType) => {
  const newStudent = new Student(student);
  const connection = await Common.Mongo.getConnection();
  return newStudent.save();
};

const getStudents = async () => {
    const connection = await Common.Mongo.getConnection();
    return await Student.find();
  };
  
  const getStudentById = async (studentId: string) => {
    const connection = await Common.Mongo.getConnection();
    return await Student.findById(studentId);
  };
  const deleteStudent = async (studentId: string) => {
    const connection = await Common.Mongo.getConnection();
    return await Student.findByIdAndDelete(studentId);
  };

  

  export const StudentData = {
    getStudents,
    createStudent,
    getStudentById,
    deleteStudent,
    
  };
  