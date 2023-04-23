import { Model } from 'mongoose';
import { StandardType } from '../types';

export type StandardModel = Model<StandardType> & {
  getStandardById: (id: string) =>Promise <StandardType|undefined>;
  createStandard: (data: string) => Promise<StandardType|undefined>;
  removeStandard:(id:string) => Promise<boolean|undefined>;
}

