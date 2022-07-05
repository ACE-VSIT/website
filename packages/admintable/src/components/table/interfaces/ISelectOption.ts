export interface ISelectOption<T> {
  options?: T[]
  name?: string
  customValue?: T
  showCustomValue?: boolean
  disableUpdates?: boolean
  customOnChange?: (e: any) => void
  optionsValue?: string[] | options<T>[]
}

type options<T> = T
