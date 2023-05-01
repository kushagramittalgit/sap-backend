import { BaseType } from '../../common/types/base.type';

export const SectionStatus = {
  active:'active' ,  removed: 'removed'} as const;
export type SectionStatus = keyof typeof SectionStatus

export type SectionType = BaseType & {
  name: string;
  standard_id: string;
  school_id:string;
  status:SectionStatus;
}

