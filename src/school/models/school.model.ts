import { Model } from 'mongoose';
import { SchoolType } from '../types';

export type SchoolModel = Model<SchoolType> & {
  getSchoolById: (id: string) =>Promise <SchoolType|undefined>;
  createSchool: (data: string) => Promise<SchoolType|undefined>;

}