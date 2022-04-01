import { Schema, model, Document } from 'mongoose'
import { CommentSchema, CommentType } from './Comment';
import { UserType } from './User';

export interface DropType extends Document {
  author?: UserType;
  message: string
  type: 'message' | 'image' | 'audio'
  location: {
    type: string
    coordinates: number[]
  }
  comments: CommentType[]
}

export const DropSchema = new Schema<DropType>(
  {
    author: { type: String, ref: 'User', required: true },
    message: String,
    type: { type: String, required: true },
    location: {
      type: { type: String, required: true },
      coordinates: { type: [Number], required: true },
    },
    comments: [{ type: CommentSchema, ref: 'Comment' }],
  },
  { timestamps: true },
)

export const Drop = model<DropType>('Drop', DropSchema)
