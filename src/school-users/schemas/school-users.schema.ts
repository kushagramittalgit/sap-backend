import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';
import { User } from '../../users/schemas';
import { SchoolUserModel } from '../models';
import { SchoolUserType } from '../types';
import { UserType } from '../../users/types';

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
      return this.findById(id);
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
      const data= await this.findById(id);
      if (data) {
        data.status ='Removed';
        const response = await data.save();
        return !!response;
      } else {
        return false;
      }
    },
    changeRole: async function (id, role) {
      const user = await this.findById(id);
  
      if (user) {
        user.role = role;
        const updatedUser = await user.save();
        return !!updatedUser;
      } else {
        return false;
      }
    },
    // getUsersBySchoolId: async function (schoolId: string): Promise<Array<{ username: string, role: string }>> {
    //   const schoolUsers = await this.find({ school_id: schoolId })
    //   .populate('user', 'username').populate({ path: 'user', model: 'User', select: 'username' }).exec();
    //   return schoolUsers.map((schoolUser: any) => ({ username: schoolUser.user.username, role: schoolUser.role }));
    // },
    
  }
});

SchoolUserSchema.virtual('user', {
  ref: 'User',
  localField: 'username',
  foreignField: 'username',
  justOne: true,
});

SchoolUserSchema.virtual('school', {
  ref: 'School',
  localField: 'school_id',
  foreignField: '_id',
  justOne: true,
});

const SchoolUser = model<SchoolUserType,SchoolUserModel>('SchoolUser', SchoolUserSchema);

export { SchoolUser, SchoolUserSchema };
