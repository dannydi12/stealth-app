import {
  Schema, model, Document, ObjectId,
} from 'mongoose'
import { UserType } from './User'

export interface CommentType extends Document {
  author?: UserType
  message: string
  drop: ObjectId;
  type: 'message' | 'image' | 'audio'
}

export const CommentSchema = new Schema<CommentType>(
  {
    author: { type: String, ref: 'User', required: true },
    drop: { type: Schema.Types.ObjectId, ref: 'Drop', required: true },
    message: String,
    type: { type: String, required: true },
  },
  { timestamps: true },
)

export const Comment = model<CommentType>('Comment', CommentSchema)
