// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhB9egqtDFyGXUyRziBHOt2U-fNlJmX-4',
  authDomain: 'ptsts-43a24.firebaseapp.com',
  projectId: 'ptsts-43a24',
  storageBucket: 'ptsts-43a24.appspot.com',
  messagingSenderId: '224151863894',
  appId: '1:224151863894:web:dc1697f12be4bbea5bb1f7',
  measurementId: 'G-LY8GT22RJZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
