import { Schema, model } from 'mongoose';
import { SchoolStudentType } from '../types';
import { SchoolStudentModel } from '../models';
import { School } from '../../school/schemas';
import { Standard } from '../../standard/schemas';
import { Section } from '../../section/schemas';


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
  id: false,
  statics: {
    getSchoolStudentById: async function (id: string) {
      return this.findById(id);
    },
    createSchoolStudent:async function (data:SchoolStudentType){
      return this.create({...data});
    },
    getStudentsByStandardId: async function (standardId: string): Promise<Array<{ student_name: string }>> {
      const schoolStudent = await this.find({ standard_id: standardId })
        .populate('school', 'student_name').populate({ path: 'school', model: 'School', select: 'student_name' }).exec();
      return schoolStudent.map((schoolStudent: any) => ({ student_name: schoolStudent.user.username }));
    },
  }
});

SchoolStudentSchema.virtual('school', {
  ref: School.modelName,
  localField: 'school_id',
  foreignField: '_id',
  justOne: true
});

SchoolStudentSchema.virtual('standard', {
  ref: Standard.modelName,
  localField: 'standard_id',
  foreignField: '_id',
  justOne: true,
});

SchoolStudentSchema.virtual('section', {
  ref: Section.modelName,
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
