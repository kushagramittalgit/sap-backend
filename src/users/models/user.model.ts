import { Model } from 'mongoose';
import { UserType } from '../types/user.type';

export type UserModel = Model<UserType> & {
  getUserById: (id: string) =>Promise <UserType|undefined>;
  createUser: (data: string) => Promise<UserType|undefined>;
  disableUser:(id:string) => Promise<boolean>;
  activateUser:(id:string) => Promise<boolean>;
  removeUser:(id:string) => Promise<boolean>;
  changePassword:(id:string,password:string) => Promise<boolean>;
  getUsers: (page: number, limit: number) => Promise<{
    users: UserType[],
    totalPages: number,
    currentPage: number,
    totalUsers: number
  }>;
}



