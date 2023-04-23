import { Model } from 'mongoose';
import { SchoolUserType } from '../types/school-users.type';

export type SchoolUserModel = Model<SchoolUserType> & {
  getSchoolUserById: (id: string) =>Promise <SchoolUserType|undefined>;
  createSchoolUser: (data: string) => Promise<SchoolUserType|undefined>;
  blockSchoolUser:(id:string) => Promise<boolean|undefined>;
  activateSchoolUser:(id:string) => Promise<boolean|undefined>;
  removeSchoolUser:(id:string) => Promise<boolean|undefined>;
  changeRole:(id:string,role:string) => Promise<SchoolUserType|undefined>;
  getUsersBySchoolId: (schoolId: string) => Promise<Array<{username: string, password: string, role: string}>>;
}
