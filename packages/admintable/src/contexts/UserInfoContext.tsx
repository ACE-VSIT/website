import create from 'zustand'
import { IUser } from '../interfaces/user.interface'

const useStore = create<{
  userInfo?: IUser
  setUserInfo?: (userInfo: IUser) => void
  clearUserInfo?: () => void
}>(set => ({
  userInfo: undefined,
  setUserInfo: (user: IUser) => set(state => ({ ...state, userInfo: user })),
  clearUserInfo: () => set(state => ({ ...state, userInfo: undefined })),
}))

const useUserInfo = () => {
  return {
    userInfo: useStore(state => state.userInfo),
    setUserInfo: useStore(state => state.setUserInfo),
    clearUserInfo: useStore(state => state.clearUserInfo),
  }
}
export default useUserInfo
