import express from 'express'
import { ObjectId } from 'mongodb'
import { User } from '../models/User'
import { onlyAuthorized } from '../utils/middleware'

const userRouter = express.Router()

userRouter.route('/').get(onlyAuthorized, async (req, res) => {
  try {
    const { user } = res

    if (!user) {
      throw new Error('No user data.')
    }
    console.log('1')
    console.log(user)
    const userObject = await User.findById({ _id: user._id })
    console.log('2')
    console.log(userObject)

    res.json(userObject)
  } catch (err) {
    res.status(401).send((err as any).message)
  }
})

export default userRouter
