import express from 'express'
import { onlyAuthorized } from '../utils/middleware'

const userRouter = express.Router()

userRouter.route('/').get(onlyAuthorized, async (req, res) => {
  try {
    const { user } = res

    if (!user) {
      throw new Error('No user data.')
    }

    res.json(user)
  } catch (err) {
    res.status(401).send((err as any).message)
  }
})

export default userRouter
