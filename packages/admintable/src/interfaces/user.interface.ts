export interface IUser {
  photoURL: string
  emailVerified: boolean
  user: string
  uid: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
  name: string
  personalDetails: {
    mobile: string
    completed: boolean
    dob: string
    section: string
    enrollmentNo: string
    firstName: string
    lastName: string
  }
}

export interface IUserItem {
  name: string
  photoURL: string
  uid: string
  user: string
  personalDetails: {
    dob: string
    enrollmentNo: string
    mobile: string
    section: string
  }
}
