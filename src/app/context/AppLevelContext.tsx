import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
// Firebase
import { auth, db } from 'app/firebase/firebase'
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, getDocs, updateDoc, where, query } from 'firebase/firestore'

interface AppLevelContextInterface {
  userInfo: any
  currentPage: string
  setCurrentPage: (page: string) => void
  login: (email: string, password: string, setLoading: any) => void
  globalLoading: boolean
  setGlobalLoading: (loading: boolean) => void
  authToken: string | null
  logout: () => void
  updateUserInfo: (user: any, body: any) => void
}

const AppLevelContext = createContext({
  userInfo: null,
  currentPage: '',
  setCurrentPage: () => {},
  login: () => {},
  globalLoading: true,
  setGlobalLoading: () => {},
  authToken: null,
  logout: () => {},
  updateUserInfo: () => {},
} as AppLevelContextInterface)

interface AppLevelContextProviderProps {
  children: React.ReactNode
}

export const AppLevelContextProvider = ({ children }: AppLevelContextProviderProps) => {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [authToken, setAuthToken] = useState<string | null>(null)
  const [globalLoading, setGlobalLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<string>('')
  const [user, setUser] = useState<any>(null)

  // Login with email and password
  const login = async (email: string, password: string, setLoading: any) => {
    setLoading(true)
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        //@ts-ignore
        const token = user.stsTokenManager.accessToken
        if (token !== authToken) {
          setAuthToken(token)
          if (token) {
            setLoading(false)
            setUser(user)
          }
        }
      })
      .catch((error) => {
        toast.error('Login failed. Please check your credentials.')
        console.log(error)
        setLoading(false)
      })
  }

  // Get user info with uid from firestore getDocs
  const getUserInfo = async (user: any) => {
    const querySnapshot = await getDocs(collection(db, 'users'))

    if (querySnapshot.empty) {
      createUser(user)
    } else {
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === user.uid) {
          setUserInfo(doc.data())
          setGlobalLoading(false)
        }
      })
    }
  }

  const createUser = async (user: any) => {
    const userBody = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      createdAt: new Date(),
      isAdmin: false,
      phoneNumber: '',
      branch: '',
    }
    try {
      const docRef = await addDoc(collection(db, 'users'), userBody)
      console.log('Document written with ID: ', docRef.id)
      setUserInfo(userBody)
      setGlobalLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // Update user info
  const updateUserInfo = async (user: any, body: any) => {
    const userRef = collection(db, 'users')
    const q = query(userRef, where('uid', '==', user.uid))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      updateDoc(doc.ref, body)
    })
  }

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserInfo(null)
        setAuthToken(null)
        setUser(null)
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }

  useEffect(() => {
    if (user) {
      getUserInfo(user)
    }
  }, [user])

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        //@ts-ignore
        const token = user.stsTokenManager.accessToken
        if (token !== authToken) {
          setAuthToken(token)
          if (token) {
            // @ts-ignore
            setUser(user)
          }
        }
      } else {
        setGlobalLoading(false)
      }
    })

    // Cleanup the listener on component unmount
    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken])

  return (
    <AppLevelContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        login,
        globalLoading,
        setGlobalLoading,
        authToken,
        userInfo,
        logout,
        updateUserInfo,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  )
}

export default AppLevelContext
