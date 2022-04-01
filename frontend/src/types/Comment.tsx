import { User } from './User';

export type Comment = {
  author?: User
  message: string
  drop: string;
  type: 'message' | 'image' | 'audio'
  updatedAt: string
  createdAt: string
}
