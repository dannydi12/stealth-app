import dotenv from 'dotenv'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import CONFIG from '../config'
import { getToken } from './utils/middleware'

import signupRouter from './users/signup'
import dropRouter from './drops'
import commentRouter from './comments'
import userRouter from './users/user'

dotenv.config()

const app = express()
const bodyParser = express.json()

const morganOption = CONFIG.NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors({ origin: ['*'] }))
app.use(getToken)
app.use(bodyParser)
app.use((error, req, res, next) => {
  let response
  if (CONFIG.NODE_ENV === 'production') {
    response = {
      error: {
        message: 'server error',
      },
    }
  } else {
    console.log(error)
    response = { message: error.message, error }
  }
  res.status(500).send(response)
})

app.use('/signup', signupRouter)
app.use('/drops', dropRouter)
app.use('/comments', commentRouter)
app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

export default app
