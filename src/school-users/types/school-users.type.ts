import { BaseType } from '../../common/types/base.type';


export const SchoolUserRole = {
  schooladmin:'schooladmin',
  staff:'staff',
  student:'student'
} as const;

export const SchoolUserStatus = {
  active:'active' , blocked:'blocked', removed: 'removed'} as const;
export type SchoolUserStatus = keyof typeof SchoolUserStatus
export type SchoolUserRole = keyof typeof SchoolUserRole

export type SchoolUserType = BaseType & {
  user_id: string;
  role: SchoolUserRole;
  status:SchoolUserStatus;
  school_id: string;
  
} 

