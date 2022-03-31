import dotenv from 'dotenv'

dotenv.config()

const CONFIG = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URL: process.env.MONGO_URL || '',
  FIREBASE_KEY_FILE: process.env.FIREBASE_KEY_FILE || './keyfile.json'
}

export default CONFIG