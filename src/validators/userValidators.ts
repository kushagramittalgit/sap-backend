import { body } from 'express-validator';

export const createUserValidator = [
  body('username').notEmpty().isString(),
  body('password').notEmpty().isString(),
  body('isSuperAdmin').notEmpty().isBoolean(),
];

export const loginUserValidator = [
  body('username').notEmpty().isString(),
  body('password').notEmpty().isString(),
];


