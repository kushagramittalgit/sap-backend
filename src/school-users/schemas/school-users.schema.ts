import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';
import { User } from '../../users/schemas';
import { SchoolUserModel } from '../models';
import { SchoolUserRoleType, SchoolUserType } from '../types';
import { School } from '../../school/schemas';

const SchoolUserSchema = new Schema<SchoolUserType,SchoolUserModel>({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  user_id: {
    type: String,
    required: true,
  },
  
  school_id: {
    type: String,
    required: true,
 },
    role: {
    type: String,
    required: true,
    enum: ['schooladmin', 'staff', 'student']
  },
  status: {
    type: String,
    default: 'Active',
    required: true,
    enum: ['Active', 'Blocked', 'Removed']
  },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  versionKey: false,
  timestamps: true,
  id: false,
  statics: {
    getSchoolUserById: async function (id) {
      return this.findById(id)
      .populate('user',null,User.modelName)
      .populate('school',null,School.modelName);
    },
    createSchoolUser: async function (data) {
      return this.create({...data});
    },
    blockSchoolUser: async function (id) {
      const data = await this.findById(id);
      if (data) {
        data.status ='Blocked';
        const response = await data.save();
        return !!response;
      } else {
        return false;
      }
    },
    activateSchoolUser: async function (id) {
      const data :any = await this.findById(id);
      if (data) {
        data.status ='Active';
        const response = await data.save();
        return !!response;
      } else {
        return false;
      }
    },
    removeSchoolUser: async function (id) {
      const data = await this.findById(id);
      if (data) {
        data.status ='Removed';
        const response = await data.save();
        return !!response;
      } else {
        return false;
      }
    },
    changeRole: async function (id:string, role:SchoolUserRoleType) {
      const data = await this.findById(id);
      if (data) {
        data.role = role;
        const updatedUser = await data.save();
        return !!updatedUser;
      } else {
        return false;
      }
    },
    getUsersBySchoolId: async function (schoolId: string): Promise<Array<{ username: string, role: string }>> {
      const schoolUsers = await this.find({ school_id: schoolId })
      .populate('user', 'username').populate({ path: 'user', model: 'User', select: 'username' }).exec();
      return schoolUsers.map((schoolUser: any) => ({ username: schoolUser.user.username, role: schoolUser.role }));
    },
    
  }
});

SchoolUserSchema.virtual('user', {
  ref: User.modelName,
  localField: 'user_id',
  foreignField: '_id',
  justOne: true,
});

SchoolUserSchema.virtual('school', {
  ref: School.modelName,
  localField: 'school_id',
  foreignField: '_id',
  justOne: true,
});

SchoolUserSchema.index({userId:1,schoolId:1},{unique:true,name:'school_user_unique'});

const SchoolUser = model<SchoolUserType,SchoolUserModel>('SchoolUser', SchoolUserSchema);

export { SchoolUser, SchoolUserSchema };
