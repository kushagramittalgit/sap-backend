import { BaseType } from '../../common/types/base.type';

type SectionStatusType = 'Active' | 'removed';

export type SectionType = BaseType & {
  name: string;
  standard_id: string;
  school_id:string;
  status:SectionStatusType;
}

