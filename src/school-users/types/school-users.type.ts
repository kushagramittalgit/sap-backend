import { BaseType } from "../../common/types/base.type";


export type SchoolUserRoleType = 'schooladmin' | 'staff' | 'student';

export type SchoolUserStatusType = 'Active' | 'Blocked' | 'Removed';

export type SchoolUserType = BaseType & {
  user_id: string;
  role: SchoolUserRoleType;
  status:SchoolUserStatusType;
  school_id: string;
  
} 

