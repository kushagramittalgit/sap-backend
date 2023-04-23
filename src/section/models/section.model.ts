import { Model } from 'mongoose';
import { SectionType } from '../types/section.type';

export type SectionModel = Model<SectionType> & {
    getSectionById: (id: string) =>Promise <SectionType|undefined>;
    createSection: (data: string) => Promise<SectionType|undefined>;
    removeSection:(id:string) => Promise<boolean|undefined>;
  }

