import create from 'zustand'

const useStore = create<{
  isDarkTheme: boolean
  setIsDarkTheme: (isDarkTheme: boolean) => void
}>(set => ({
  isDarkTheme: false,
  setIsDarkTheme: isDarkTheme => {
    localStorage.setItem('isDarkTheme', isDarkTheme.toString())
    set(state => ({ ...state, isDarkTheme }))
  },
}))

const useThemeContext = () => {
  return {
    isDarkTheme: useStore(state => state.isDarkTheme),
    setIsDarkTheme: useStore(state => state.setIsDarkTheme),
  }
}
export default useThemeContext
