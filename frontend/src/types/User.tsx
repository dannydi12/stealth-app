export type User = {
  username: string
  avatar: {
    color: string;
    pfp: string;
  }
  signUpLocation: {
    type: string
    coordinates: number[]
  }
  updatedAt: string
  createdAt: string
}
