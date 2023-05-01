import { BaseType } from '../../common/types/base.type';

export const StandardStatus = {
  active:'active' ,  removed: 'removed'} as const;
export type StandardStatus = keyof typeof StandardStatus

export type StandardType = BaseType & {
  label: string;
  school_id:string;
  status: StandardStatus;
}

