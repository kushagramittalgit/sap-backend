import { model, Schema } from 'mongoose';
import * as uuid from 'uuid';
import { StandardType } from '../types';
import { StandardModel } from '../models';
import { randomUUID } from 'crypto';

const StandardSchema = new Schema<StandardType, StandardModel>({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  label: {
    type: String,
    required: true,
  },
  school_id: {
    type: String,
    required: true,
  },  
  status: {
    type: String,
    default: 'active',
    required:true,
    enum: ['active',   'removed']
  },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  versionKey: false,
  timestamps: true,
  id: false,
  statics: {
    getStandardById: async function (id: string) {
      return this.findById(id);
    },
    createStandard:async function (data:StandardType){
      return this.create({...data});
    },
    
  removeStandard:async function (id:string) {
    const data = await this.findById(id);
    if(data){
      data.status ='removed';
      const response = await data.save();
      return !!response;
    }else {
      return false;
    }
  },
  activateStandard:async function (id:string) {
    const data = await this.findById(id);
    if(data){
      data.status ='active';
      const response = await data.save();
      return !!response;
    }else {
      return false;
    }
  },
  
  getStandards: async function (page: number, limit: number) {
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

const Standard = model<StandardType, StandardModel>('standard', StandardSchema);

export { Standard, StandardSchema };
