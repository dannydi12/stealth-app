import * as admin from 'firebase-admin'
import CONFIG from '../config'
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync(CONFIG.FIREBASE_KEY_FILE, { encoding: 'utf-8' }))
const adminInstance = admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

export const storage = admin.storage()

export const auth = admin.auth()

