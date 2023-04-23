import { BaseType } from '../../common/types/base.type';

export type StudentType = BaseType & {
  student_name: string;
  student_gender: string;
  student_dob: Date;
  student_contact: number;
  school_id: string;
}

