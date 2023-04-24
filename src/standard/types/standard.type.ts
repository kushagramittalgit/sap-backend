import { Types } from 'mongoose';
import { BaseType } from '../../common/types/base.type';

type StandardStatusType = 'active' | 'removed';

export type StandardType = BaseType & {
  label: string;
  school_id:string;
  status: StandardStatusType;
}

