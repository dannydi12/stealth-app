import { auth } from './firebase'
import { User } from '../models/User'

export const getToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('No token provided')
  }

  const token = req?.headers?.authorization?.split('Bearer ')[1] || ''
  const user = await getUserInfo(token)

  res.user = user

  return next()
}

export const onlyAuthorized = async (req, res, next) => {
  if (!res.user) {
    return res.status(401).send('Must be logged in.')
  }

  return next()
}

export const getUserInfo = async (token: string) => {
  try {
    const decodedToken = await auth.verifyIdToken(token)
    const user = await User.findById(decodedToken?.uid as string).lean()

    return { _id: decodedToken?.uid, ...user }
  } catch (err) {
    return null
  }
}
