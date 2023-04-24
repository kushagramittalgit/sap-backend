import { BaseType } from "../../common/types/base.type";

export type UserStatusType = 'active'|'disabled'|'removed';

export type UserType = BaseType & {
  username: string;
  password: string;
  issuperadmin:boolean;
  status?: UserStatusType ;
}

