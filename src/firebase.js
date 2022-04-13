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
  updateDoc,
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

const saveUser = async (email, uid, name, photoURL) => {
  const checkIfUserExists = query(
    collection(db, "users"),
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
    await setDoc(doc(db, "users", email), {
      user: email,
      uid,
      name,
      createdAt: Timestamp.fromDate(new Date()),
      personalDetails: "",
      photoURL,
    })
    console.log("saved")
  }
}

export const savePersonalDetails = async (email, personalDetails) => {
  const { dob, enrollmentNo, firstName, lastName, mobile, section } =
    personalDetails
  if (!firstName && !lastName && !mobile && !enrollmentNo && !section && !dob)
    return
  const emailRef = doc(db, "users", email)
  await updateDoc(emailRef, {
    personalDetails: {
      dob,
      enrollmentNo,
      firstName,
      lastName,
      mobile,
      section,
    },
  })
  console.log("saved personal details")
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
    dispatch({ type: "LOGIN_START" })
    const res = await signInWithPopup(auth, provider)
    await saveUser(
      res.user.email,
      res.user.uid,
      res.user.displayName,
      res.user.photoURL
    )
    res.user &&
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.user,
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
  dispatch({ type: "LOGIN_START" })
  onAuthStateChanged(auth, user => {
    if (user) {
      saveUser(user.email, user.uid, user.displayName, user.photoURL)
      dispatch({ type: "LOGIN_SUCCESS", payload: user })
    } else {
      // window.location.replace("/");
      // console.log("Signed Out");
      dispatch({ type: "LOGOUT_SUCCESS" })
    }
  })
}
