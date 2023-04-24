import { Schema, model, Document, Types } from 'mongoose';
import { SectionType } from '../types';
import { SectionModel } from '../models';
import { randomUUID } from 'crypto';

const SectionSchema = new Schema<SectionType,SectionModel>({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  name: {
    type: String,
    required: true,
  },
  school_id: {
    type: String,
    required: true,
  },
  standard_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Active',
    required:true,
    enum: ['Active', 'removed']
  },
  
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  versionKey: false,
  timestamps: true,
  id: false,
  statics: {
    getSectionById: async function (id: string) {
      return this.findById(id);
    },
    createSection:async function (data:SectionType){
      return this.create({...data});
    },
    
  removeSection:async function (id:string) {
    const data = await this.findById(id);
    if(data){
      data.status ='removed';
      const response = await data.save();
      return !!response;
    }else {
      return false;
    }
  },
  activateSection:async function (id:string) {
    const data = await this.findById(id);
    if(data){
      data.status ='Active';
      const response = await data.save();
      return !!response;
    }else {
      return false;
    }
  },
  
  getSections: async function (page: number, limit: number) {
    const users = await this.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const count = await this.countDocuments().exec();
    const totalPages = Math.ceil(count / limit);

    return {
      users,
      totalPages,
      currentPage: page,
      totalUsers: count,
    };
  },
}
});

SectionSchema.virtual('standard', {
  ref: 'Standard',
  localField: 'standard_id',
  foreignField: '_id',
  justOne: true,
});

SectionSchema.virtual('School', {
  ref: 'School',
  localField: 'school_id',
  foreignField: '_id',
  justOne: true
});



const Section = model<SectionType,SectionModel>('Section', SectionSchema);

export { Section, SectionSchema };
