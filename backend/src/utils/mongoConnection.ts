import mongoose from 'mongoose'
import CONFIG from '../../config'

const connectToMongo = async () => {
  await mongoose.connect(CONFIG.MONGO_URL)
  console.log('Connected to Mongo')
}

connectToMongo().catch((err) => {
  console.error(err)
})
