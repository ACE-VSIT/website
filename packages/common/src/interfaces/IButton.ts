import React from 'react';

export interface IButton {
  value?: string
  children?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export interface IButtonComponents {
  sm?: boolean
  md?: boolean
  lg?: boolean
  primary?: boolean
}
