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
