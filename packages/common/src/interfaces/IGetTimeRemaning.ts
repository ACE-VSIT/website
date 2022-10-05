export type IgetTimeRemaining = (endtime: string) => {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}
