import { Model } from 'mongoose';
import { StudentType } from '../types/student.type';

export type StudentModel = Model<StudentType>  & {
    getStudentById: (id: string) =>Promise <StudentType|undefined>;
    createStudent: (data: string) => Promise<StudentType|undefined>;
}
