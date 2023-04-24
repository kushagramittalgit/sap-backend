import { model, Schema } from 'mongoose';
import { StudentType } from '../types';
import { randomUUID } from 'crypto';

const StudentSchema = new Schema<StudentType>({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  student_name: {
    type: String,
    required: true,
  },
  student_gender: {
    type: String,
    required: true,
  },
  student_dob: {
    type: Date,
    required: true,
  },
  student_contact: {
    type: Number,
    required: true,
  },
  school_id: {
    type: String,
    required: true,
  },    
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  versionKey: false,
  timestamps: true,
  id: false,
  statics: {
    getStudentById: async function (id: string) {
      return this.findById(id);
    },
    createStudent:async function (data:StudentType){
      return this.create({...data});
    },
  }
  
});

StudentSchema.virtual('School', {
  ref: 'School',
  localField: 'school_id',
  foreignField: '_id',
  justOne: true,
});


const Student = model<StudentType>('student', StudentSchema);

export { Student, StudentSchema };
