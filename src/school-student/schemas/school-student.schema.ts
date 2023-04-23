import { Schema, model, Document, Types } from 'mongoose';
import { SchoolStudentType } from '../types';
import { SchoolStudentModel } from '../models';


const SchoolStudentSchema = new Schema<SchoolStudentType,SchoolStudentModel>({
  
  school_id: {
    type: String,
    required:true,
  },

  standard_id:{
    type:String,
    required:true,
  },
  section_id:{
    type:String,
    required:true,
  },
  student_id:{
    type:String,
    required:true,
  },

  isCurrent:{
    type:Boolean,
    required:true,
  }

}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  versionKey: false,
  timestamps: true,
  id: false
});

SchoolStudentSchema.virtual('school', {
  ref: 'School',
  localField: 'school_id',
  foreignField: '_id',
  justOne: true
});

SchoolStudentSchema.virtual('standard', {
  ref: 'Standard',
  localField: 'standard_id',
  foreignField: '_id',
  justOne: true,
});

SchoolStudentSchema.virtual('section', {
  ref: 'Section',
  localField: 'section_id',
  foreignField: '_id',
  justOne: true,
});
SchoolStudentSchema.virtual('student', {
  ref: 'Student',
  localField: 'student_id',
  foreignField: '_id',
  justOne: true,
});



const SchoolStudent = model<SchoolStudentType,SchoolStudentModel>('SchoolStudent', SchoolStudentSchema);

export { SchoolStudent, SchoolStudentSchema };
