import { BaseType } from '../../common/types/base.type';

export const UserStatus = {
  active:'active' , disabled:'disabled', removed: 'removed'} as const;
export type UserStatus = keyof typeof UserStatus
export type UserType = BaseType & {
  username: string;
  password: string;
  isSuperAdmin: boolean;
  status: UserStatus;
};
