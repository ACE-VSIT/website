export interface IRegisationsButton {
  size: 'sm' | 'md' | 'lg'
  value: string
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface IRegisationsModal {
  setState: React.Dispatch<React.SetStateAction<boolean>>
}
