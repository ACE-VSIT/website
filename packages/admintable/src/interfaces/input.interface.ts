export interface IInput {
  customVal?: string
  cellId?: string
  disableUpdates?: boolean
  customOnChange?: (e: string) => void
}

export type IInputDate = IInput
export type IInputImage = IInput
export type IInputText = IInput
