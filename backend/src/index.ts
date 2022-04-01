import app from './app'
import CONFIG from '../config'
import './mongoConnection'
import { UserType } from './models/User'

// Context
declare global {
  namespace Express {
    interface Response {
      user: UserType | null
    }
  }
}

app.listen(CONFIG.PORT, () => {
  console.log(`Server listening at http://localhost:${CONFIG.PORT}`)
})
