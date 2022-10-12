import React from 'react'
import { ButtonComponent } from './ButtonElements'

export default function Button ({
  to,
  value,
  sm,
  md,
  lg,
  primary,
  style,
  onClick,
  ...rest
}) {
  return (
    <>
      <ButtonComponent
        to={to}
        sm={sm}
        md={md}
        lg={lg}
        primary={primary}
        style={style}
        onClick={onClick}
        {...rest}
      >
        {value}
      </ButtonComponent>
    </>
  )
}
