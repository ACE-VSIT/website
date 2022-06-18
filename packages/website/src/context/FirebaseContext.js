import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
} from "react"
import { AuthContext } from "./auth/AuthContext"
import { signInStatus, auth } from "../firebase"
import {
  query,
  collection,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore"

export const FirebaseContext = createContext("")

export function FirebaseContextProvider({ children }) {
  const { dispatch, user } = useContext(AuthContext)
  const [personalDetails, setPersonalDetails] = useState()
  const [isVerified, setIsVerified] = useState(false)

  const getPersonalDetails = useCallback(async email => {
    const db = getFirestore()
    const checkIfUserExists = query(
      collection(db, "users"),
      where("user", "==", email)
    )
    let personalInfo = []
    const queryData = await getDocs(checkIfUserExists)
    queryData.forEach(doc => {
      personalInfo.push(doc.data().personalDetails)
    })
    setPersonalDetails(personalInfo)
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
  }
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}
