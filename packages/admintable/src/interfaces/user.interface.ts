export interface ISubmissionItem {
  id: string
  name: string
  url: string
  isNew: true
  type: string
  iconUrl: string
  uploadId: string
  mimeType: string
  serviceId: string
  downloadUrl: string
  description: string
  uploadState: string
  lastEditedUtc: number
}

export type ISubmissionItemKey = keyof ISubmissionItem

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
  submissions?: {
    [key: string]: ISubmissionItem
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
