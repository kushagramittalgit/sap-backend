import { Model } from 'mongoose';
import { SchoolStudentType } from '../types';

export type SchoolStudentModel = Model<SchoolStudentType> & {
  getSchoolStudentById: (id: string) =>Promise <SchoolStudentType|undefined>;
  createSchoolStudent: (data: string) => Promise<SchoolStudentType|undefined>;
  getStudentsByStandardId: (standardId: string) => Promise<Array<{student_name: string}>>;
}
