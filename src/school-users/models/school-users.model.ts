import { Model } from 'mongoose';
import { SchoolUserType } from '../types/school-users.type';
import { SchoolUserRole } from '../types/school-users.type';

export type SchoolUserModel = Model<SchoolUserType> & {
  getSchoolUserById: (id: string) =>Promise <SchoolUserType|undefined>;
  createSchoolUser: (data: SchoolUserType) => Promise<SchoolUserType|undefined>;
  blockSchoolUser:(id:string) => Promise<boolean|undefined>;
  activateSchoolUser:(id:string) => Promise<boolean|undefined>;
  removeSchoolUser:(id:string) => Promise<boolean|undefined>;
  changeRole:(id:string,role: SchoolUserRole) => Promise<unknown>;
  getUsersBySchoolId: (schoolId: string) => Promise<Array<{username: string, password: string, role: string}>>;
}
