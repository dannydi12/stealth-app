import app from './app'
import CONFIG from '../config'
import './mongoConnection'

app.listen(CONFIG.PORT, () => {
  console.log(`Server listening at http://localhost:${CONFIG.PORT}`)
})
