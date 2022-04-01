import { Comment } from './Comment';
import { User } from './User';

export type Drop = {
  author?: User;
  message: string
  type: 'message' | 'image' | 'audio'
  location: {
    type: string
    coordinates: number[]
  }
  comments: Comment[]
  updatedAt: string
  createdAt: string
}
