import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  sendEmailVerification,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDocs,
  getDoc,
  Timestamp,
  collection,
  query,
  where,
} from 'firebase/firestore'
import { initializeApp, getApps } from 'firebase/app'

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
export const auth = getAuth()
const db = getFirestore()

const saveUser = async (email, uid, name, photoURL, emailVerified) => {
  const checkIfUserExists = query(
    collection(db, 'users'),
    where('user', '==', email)
  )
  const queryData = await getDocs(checkIfUserExists)
  let flag = []
  queryData.forEach(doc => {
    flag.push(doc.id)
  })
  if (flag.includes(email)) {
    // console.log("exists")
  } else {
    await setDoc(doc(db, 'users', email), {
      user: email,
      uid,
      name,
      createdAt: Timestamp.fromDate(new Date()),
      personalDetails: '',
      photoURL,
      emailVerified,
    })
  }
}

export const savePersonalDetails = async (email, personalDetails) => {
  const { dob, enrollmentNo, firstName, lastName, mobile, section } =
    personalDetails
  if (!firstName && !lastName && !mobile && !enrollmentNo && !section && !dob)
    return
  const emailRef = doc(db, 'users', email)
  await updateDoc(emailRef, {
    personalDetails: {
      dob,
      enrollmentNo,
      firstName,
      lastName,
      mobile,
      section,
      completed: true,
    },
  })
}

export const saveSubmittionData = async (data, questionType, email) => {
  if (
    questionType &&
    data.downloadUrl &&
    data?.url &&
    data?.name &&
    data?.lastEditedUtc &&
    data?.mimeType &&
    data?.uploadState &&
    data?.id
  ) {
    const emailRef = doc(db, 'users', email)
    const emailInfo = await getDoc(emailRef)
    const submissions = emailInfo.data()?.submissions
    await updateDoc(emailRef, {
      submissions: {
        ...submissions,
        [questionType.replace(/\s+/g, '-').toLowerCase()]: { ...data },
      },
    })
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
    dispatch({ type: 'LOGIN_START' })
    const name = firstName + ' ' + lastName
    saveUser(email, res.user.uid, name)
    res.user &&
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { email: res.user.email, name: res.user.displayName },
      })
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err })
    console.error(err)
  }
}

export const loginUserAccount = async (email, password, user, dispatch) => {
  try {
    dispatch({ type: 'LOGIN_START' })
    const res = await signInWithEmailAndPassword(auth, email, password)
    res.user &&
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { email, name: res.user.displayName },
      })
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err })
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

export const loginWithGoogleAccount = async dispatch => {
  try {
    dispatch({ type: 'LOGIN_START' })
    const res = await signInWithPopup(auth, provider)
    if (!auth.currentUser.emailVerified)
      await sendEmailVerification(auth.currentUser)
    await saveUser(
      res.user.email,
      res.user.uid,
      res.user.displayName,
      res.user.photoURL,
      res.user.emailVerified
    )
    res.user &&
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.user,
      })
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err })
    console.error(err)
  }
}

export const checkEmailVerfiy = async setIsVerified => {
  try {
    await auth.currentUser.reload() // Reload user to check if user has already verified
    const emailRef = doc(db, 'users', auth.currentUser.email)
    const emailInfo = await getDoc(emailRef)
    if (emailInfo.exists()) {
      if (emailInfo.data().emailVerified) setIsVerified(true)
      else {
        // Checking if user has verified and not saved of firestore
        if (auth.currentUser.emailVerified) {
          await updateDoc(emailRef, {
            emailVerified: true,
          })
        } else {
          setIsVerified(false)
          await sendEmailVerification(auth.currentUser)
        }
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteFileFromStorage = async fileId => {
  if (fileId) {
    var raw = JSON.stringify({
      fileId: `${fileId}`,
    })

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
    }

    fetch('https://ace-functions.vercel.app/googleDriveDelete', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}

export const signOutUser = async dispatch => {
  try {
    signOut(auth).then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' })
    })
  } catch (err) {
    console.error(err)
  }
}

export function signInStatus(dispatch) {
  dispatch({ type: 'LOGIN_START' })
  onAuthStateChanged(auth, user => {
    if (user) {
      saveUser(
        user.email,
        user.uid,
        user.displayName,
        user.photoURL,
        user.emailVerified
      )
      dispatch({ type: 'LOGIN_SUCCESS', payload: user })
    } else {
      // window.location.replace("/");
      // console.log("Signed Out");
      dispatch({ type: 'LOGOUT_SUCCESS' })
    }
  })
}
