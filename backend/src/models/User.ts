import { Schema, model, Document } from 'mongoose'

export interface UserType extends Document {
  username: string
  avatar: {
    color: string;
    pfp: string;
  }
  signUpLocation: {
    type: string
    coordinates: number[]
  }
}

export const UserSchema = new Schema<UserType>(
  {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    avatar: {
      color: { type: String, required: true },
      pfp: { type: String, required: true },
    },
    signUpLocation: {
      type: { type: String },
      coordinates: [Number],
    },
  },
  { timestamps: true },
)

export const User = model<UserType>('User', UserSchema)
