import express from 'express'
import { auth } from '../utils/firebase'
import { User } from '../models/User'

const signupRouter = express.Router()

signupRouter.route('/').post(async (req, res) => {
  try {
    const { username, avatar, signUpLocation } = req.body

    const token = req?.headers?.authorization?.split('Bearer ')[1] || ''
    const decodedToken = await auth.verifyIdToken(token)

    if (!decodedToken.uid) {
      throw new Error('Auth error.')
    }

    const user = await User.create({
      _id: decodedToken.uid,
      username,
      avatar,
      signUpLocation,
    })

    res.json(user)
  } catch (err) {
    console.log((err as any).message)
    res.status(401).send((err as any).message)
  }
})

export default signupRouter
