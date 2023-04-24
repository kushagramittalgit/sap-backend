import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { UserType } from '../types';
import { UserModel } from '../models';

const UserSchema  = new Schema<UserType,UserModel>({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  issuperadmin: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    default: 'active',
    required:true,
    enum: ['active',  'disabled', 'removed']
  },
  
}, {
  versionKey: false,
  timestamps: true,
  id: false,
  
  statics: {
    getUserById: async function (id: string) {
      return this.findById(id);
    },
    createUser:async function (data:UserType){
      return this.create({...data});
    },
    disableUser: async function (id: string) {
      const data= await this.findById(id);
      if (data) {
        data.status = 'disabled';
        const response = await data.save();
        return !!response;
      } else {
        return false;
      }
    },
  activateUser:async function (id:string) {
    const data = await this.findById(id);
    if(data){
      data.status ='active';
      const response = await data.save();
      return !!response;
    }else {
      return false;
    }
  },
  removeUser:async function (id:string) {
    const data= await this.findById(id);
    if(data){
      data.status ='removed';
      const response = await data.save();
      return !!response;
    }else {
      return false;
    }
  },
  changePassword:async function (id:string,password:string) {
    const data = await this.findById(id);
    if(data){
      data.password = password;
      const response = await data.save();
      return !!response;
    }else {
      return false;
    }
  },
  getUsers: async function (page: number, limit: number) {
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
},
  }
);

UserSchema.index({ username: 1 }, { unique: true, name: 'unique_user_username' });

 const User = model<UserType, UserModel>('User', UserSchema);

 export { User, UserSchema };
