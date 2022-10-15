export interface IInput {
  customVal?: string
  cellId?: string
  disableUpdates?: boolean
  customOnChange?: (e: string) => void
}

export interface IInputDate extends IInput {}
export interface IInputImage extends IInput {}
export interface IInputText extends IInput {}
