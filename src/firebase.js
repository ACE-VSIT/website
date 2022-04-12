import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth"
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  Timestamp,
  collection,
  query,
  where,
} from "firebase/firestore"
import { initializeApp, getApps } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.GATSBY_APIKEY,
  authDomain: process.env.GATSBY_AUTHDOMAIN,
  projectId: process.env.GATSBY_PROJECTID,
  storageBucket: process.env.GATSBY_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGINGSENDERID,
  appId: process.env.GATSBY_APPID,
}

if (getApps().length === 0) {
  initializeApp(firebaseConfig)
}

const provider = new GoogleAuthProvider()
const auth = getAuth()
const db = getFirestore()

const saveUser = async (email, uid, name) => {
  const checkIfUserExists = query(
    collection(db, "email"),
    where("user", "==", email)
  )
  const queryData = await getDocs(checkIfUserExists)
  let flag = []
  queryData.forEach(doc => {
    flag.push(doc.id)
  })
  if (flag.includes(email)) {
    console.log("exists")
  } else {
    await setDoc(doc(db, "email", email), {
      user: email,
      uid,
      name,
      createdAt: Timestamp.fromDate(new Date()),
    })
    console.log("saved")
  }
}

export const createUserAccount = async (
  email,
  password,
  firstName,
  lastName,
  user,
  dispatch
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    dispatch({ type: "LOGIN_START" })
    const name = firstName + " " + lastName
    saveUser(email, res.user.uid, name)
    res.user &&
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { email: res.user.email, name: res.user.displayName },
      })
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err })
    console.error(err)
  }
}

export const loginUserAccount = async (email, password, user, dispatch) => {
  try {
    dispatch({ type: "LOGIN_START" })
    const res = await signInWithEmailAndPassword(auth, email, password)
    res.user &&
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { email, name: res.user.displayName },
      })
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err })
    console.error(err)
  }
}

export const resetEmailPassword = async email => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (err) {
    console.error(err)
  }
}

export const loginWithGoogleAccount = async (user, dispatch) => {
  try {
    const res = await signInWithPopup(auth, provider)
    await saveUser(res.user.email, res.user.uid, res.user.displayName)
    res.user &&
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { email: res.user.email, name: res.user.displayName },
      })
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err })
    console.error(err)
  }
}

export const signOutUser = async dispatch => {
  try {
    signOut(auth).then(() => {
      console.log("Sign Out success")
      dispatch({ type: "LOGOUT_SUCCESS" })
    })
  } catch (err) {
    console.error(err)
  }
}

export function signInStatus(dispatch) {
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: user })
    } else {
      // window.location.replace("/");
      // console.log("Signed Out");
    }
  })
}
