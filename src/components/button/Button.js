import React from "react"
import { ButtonComponent } from "./ButtonElements"

export default function Button({ to, value, sm, md, lg }) {
  return (
    <>
      <ButtonComponent to={to} sm={sm} md={md} lg={lg}>
        {value}
      </ButtonComponent>
    </>
  )
}
