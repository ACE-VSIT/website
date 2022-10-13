import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext
} from 'react'
import { AuthContext } from './auth/AuthContext'
import { signInStatus, auth } from '../firebase'
import {
  query,
  collection,
  where,
  getDocs,
  getFirestore
} from 'firebase/firestore'

export const FirebaseContext = createContext('')

export function FirebaseContextProvider ({ children }) {
  const { dispatch, user } = useContext(AuthContext)
  const [personalDetails, setPersonalDetails] = useState()
  const [isVerified, setIsVerified] = useState(false)
  const [submissions, setSubmissions] = useState()

  const getPersonalDetails = useCallback(async email => {
    const db = getFirestore()
    const checkIfUserExists = query(
      collection(db, 'users'),
      where('user', '==', email)
    )
    const personalInfo = []
    const queryData = await getDocs(checkIfUserExists)
    queryData.forEach(doc => {
      personalInfo.push(doc.data().personalDetails)
    })
    setPersonalDetails(personalInfo)
  }, [])

  const getSubmissionDetails = useCallback(async email => {
    const db = getFirestore()
    const checkIfUserExists = query(
      collection(db, 'users'),
      where('user', '==', email)
    )
    let submissions
    const queryData = await getDocs(checkIfUserExists)
    queryData.forEach(doc => {
      submissions = doc.data().submissions
    })
    setSubmissions(submissions)
    return submissions
  }, [])

  useEffect(() => {
    if (auth?.currentUser?.emailVerified) {
      setIsVerified(true)
    } else {
      setIsVerified(false)
    }
  }, [user])

  useEffect(() => {
    if (user?.email) {
      getSubmissionDetails(user.email)
    }
  }, [user?.email, getSubmissionDetails])

  useEffect(() => {
    if (user?.email) {
      getPersonalDetails(user.email)
    }
  }, [user, getPersonalDetails])

  useEffect(() => {
    signInStatus(dispatch)
  }, [dispatch])

  const value = {
    getPersonalDetails,
    personalDetails,
    setPersonalDetails,
    isVerified,
    setIsVerified,
    getSubmissionDetails,
    submissions
  }
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}
