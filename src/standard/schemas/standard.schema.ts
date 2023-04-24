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
  
});

StandardSchema.virtual('school', {
  ref: 'School',
  localField: 'school_id',
  foreignField: '_id',
  justOne: true
});


const Standard = model<StandardType, StandardModel>('standard', StandardSchema);

export { Standard, StandardSchema };
