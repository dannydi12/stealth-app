import express from 'express'
import { User } from '../models/User'

const signupRouter = express.Router()

signupRouter.route('/').post(async (req, res) => {
  try {
    console.log(req.body)
    const {
      _id, username, avatar, signUpLocation,
    } = req.body

    if ((res as any)?.user?._id) {
      throw new Error('Auth error.')
    }

    const user = await User.create({
      _id,
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
