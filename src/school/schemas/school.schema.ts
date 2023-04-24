import { model, Schema } from 'mongoose';
import { SchoolType } from '../types';
import { SchoolModel } from '../models';
import { randomUUID } from 'crypto';

const SchoolSchema = new Schema<SchoolType, SchoolModel>({
  _id: {
    type: String,
    default: () => randomUUID(),
  },

    school_name: {
    type: String,
    required: true,
  },
  school_city: {
    type: String,
    required: true,
  },
  school_state: {
    type: String,
    required: true,
  },
  school_contact: {
    type: Number,
    required: true,
  },
  
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  versionKey: false,
  timestamps: true,
  id: false,
  statics: {
    getSchoolById: async function (id: string) {
      return this.findById(id);
    },
    createSchool:async function (data:SchoolType){
      return this.create({...data});
    },
  }
  
});


const School = model<SchoolType, SchoolModel>('School', SchoolSchema);

export { School, SchoolSchema };
