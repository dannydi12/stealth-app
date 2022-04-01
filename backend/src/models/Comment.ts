import { Schema, model, Document } from 'mongoose'
import { UserType } from './User'

export interface CommentType extends Document {
  author?: UserType
  message: string
  type: 'message' | 'image' | 'audio'
}

export const CommentSchema = new Schema<CommentType>(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: String,
    type: { type: String, required: true },
  },
  { timestamps: true },
)

export const Comment = model<CommentType>('Comment', CommentSchema)
