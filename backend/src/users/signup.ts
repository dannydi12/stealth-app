import express from 'express'
import { getToken } from '../middleware'
import { User } from '../models/User'

const signupRouter = express.Router()
const bodyParser = express.json()

signupRouter.route('/').post(bodyParser, getToken, async (req, res) => {
  try {
    const { _id, username, backgroundColor, emoji, signUpLocation } = req.body

    if ((res as any)?.user?._id) {
      throw new Error('Auth error.')
    }

    const user = await User.create({
      _id: _id,
      username,
      avatar: {
        backgroundColor,
        emoji,
      },
      signUpLocation,
    })

    res.json(user)
  } catch (err) {
    res.status(401).send((err as any).message)
  }
})

export default signupRouter
