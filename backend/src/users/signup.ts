import express from 'express'
import { onlyAuthorized } from '../middleware'
import { User } from '../models/User'

const signupRouter = express.Router()

signupRouter.route('/').post(onlyAuthorized, async (req, res) => {
  try {
    const {
      _id, username, avatar, signUpLocation,
    } = req.body

    if (res.user?._id) {
      throw new Error('Auth error.')
    }

    const user = await User.create({
      _id: res.user?._id,
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
