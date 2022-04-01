export interface User {
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
