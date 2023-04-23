import { BaseType } from "../../common/types/base.type";

export type SchoolStudentType = BaseType & {
  standard_id: string;
  section_id:string;
  school_id: string;
  student_id:string;
  isCurrent:boolean;
} 

