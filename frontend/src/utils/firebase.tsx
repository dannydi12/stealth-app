import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyAgHOZcDz0jRlKpzaizyjIa-26NXg3TfM8',
  authDomain: 'crosswalk-345817.firebaseapp.com',
  projectId: 'crosswalk-345817',
  storageBucket: 'crosswalk-345817.appspot.com',
  messagingSenderId: '15435557385',
  appId: '1:15435557385:web:6d526e1191b19bfd60e6d8',
  measurementId: 'G-0JP10GNM2T',
}

initializeApp(firebaseConfig)
