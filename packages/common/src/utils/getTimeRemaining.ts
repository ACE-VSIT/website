import { IgetTimeRemaining } from '../interfaces/IGetTimeRemaning'

export const getTimeRemaining: IgetTimeRemaining = (endtime: string) => {
  const total = Date.parse(endtime) - Date.parse(new Date().toString()) // total time remaining
  const seconds = Math.floor((total / 1000) % 60) // seconds remaining
  const minutes = Math.floor((total / 1000 / 60) % 60) // minutes remaining
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24) // hours remaining
  const days = Math.floor(total / (1000 * 60 * 60 * 24)) // days remaining

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  }
}
