import { Model } from 'mongoose';
import { UserType } from '../types/user.type';

export type UserModel = Model<UserType> & {
  getUserById: (id: string) =>Promise <UserType|undefined>;
  createUser: (data: string) => Promise<UserType|undefined>;
  disableUser:(id:string) => Promise<boolean|undefined>;
  activateUser:(id:string) => Promise<boolean|undefined>;
  removeUser:(id:string) => Promise<boolean|undefined>;
  changePassword:(id:string,password:string) => Promise<UserType|undefined>;
  getUsers: (page: number, limit: number) => Promise<{
    users: UserType[],
    totalPages: number,
    currentPage: number,
    totalUsers: number
  }>;
}



