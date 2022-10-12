import React from 'react'
import { IButton, IButtonComponents } from '../../interfaces/IButton'
import { ButtonComponent } from './ButtonElements'

const Button: React.FC<IButton & IButtonComponents> = ({
  value,
  sm,
  md,
  lg,
  primary,
  style,
  onClick,
  ...rest
}) => (
  <ButtonComponent
    sm={sm}
    md={md}
    lg={lg}
    style={style}
    onClick={onClick}
    primary={primary}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {value}
  </ButtonComponent>
)

export default Button
