import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'

import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
  DocumentData,
  QuerySnapshot,
  updateDoc,
} from 'firebase/firestore'

import { initializeApp, getApps } from 'firebase/app'
import { userContextType } from '../contexts/AuthContext'
import { IUser, IUserItem } from '../interfaces/user.interface'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
}

if (getApps().length === 0) {
  initializeApp(firebaseConfig)
}

const provider = new GoogleAuthProvider()
export const auth = getAuth()
const db = getFirestore()

export const loginWithGoogleAccount = async (
  login: (user: userContextType) => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true)
  try {
    const res = await signInWithPopup(auth, provider)
    const userRef = doc(db, 'users', `${res.user.email}`)
    const userInfo = await getDoc(userRef)
    if (userInfo.data()?.admin) {
      login({
        email: userInfo.data()?.user,
        admin: userInfo.data()?.admin,
        name: userInfo.data()?.name,
        uid: userInfo.data()?.uid,
        photoUrl: userInfo.data()?.photoURL,
      })
      setLoading(false)
    } else {
      setLoading(false)
      throw new Error('Only admins can access this page')
    }
  } catch (err) {
    console.error(err)
  }
}

export const getTableData = async (user: userContextType) => {
  try {
    if (user?.email && user?.admin && user?.name && user?.uid) {
      const userSnapshot: QuerySnapshot<DocumentData> = await getDocs(
        collection(db, 'users')
      )
      let users: IUser[] = []
      userSnapshot.forEach(doc => {
        users.push(doc.data() as IUser)
      })
      return users
    }
  } catch (error) {
    console.log(error)
  }
}

export const setTableUserInfo = async (user: IUserItem) => {
  try {
    const userRef = doc(db, 'users', `${user.user}`)
    await updateDoc(userRef, { ...user })
  } catch (error) {
    console.log(error)
  }
}

export const signOutUser = async (logout: () => void) => {
  try {
    signOut(auth).then(() => {
      logout()
      console.log('Sign Out success')
    })
  } catch (err) {
    console.error(err)
  }
}

export async function signInStatus(
  login: (user: userContextType) => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true)
  onAuthStateChanged(auth, async user => {
    if (user) {
      const userRef = doc(db, 'users', `${user.email}`)
      const userInfo = await getDoc(userRef)
      if (userInfo.data()?.admin) {
        login({
          email: userInfo.data()?.user,
          admin: userInfo.data()?.admin,
          name: userInfo.data()?.name,
          uid: userInfo.data()?.uid,
          photoUrl: userInfo.data()?.photoURL,
        })
      }
      setLoading(false)
    } else {
      // window.location.replace("/");
      // console.log("Signed Out");
      setLoading(false)
    }
  })
}
