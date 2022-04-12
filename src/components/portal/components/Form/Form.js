import React, { useState } from "react"
import { Input, Select, FormWrapper, Option } from "./FormElements"
import Button from "../../../button/Button"
import config from "./FormConfig.json"
import { Heading } from "../../../../styles/sharedStyles"

export default function Form() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    enrollmentNo: "",
    section: "",
  })

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleGoogleLogin = e => {
    e.preventDefault()
    console.log("input")
    // loginWithGoogleAccount(user, dispatch)
  }
  return (
    <>
      <Heading>Personal Details</Heading>
      <FormWrapper onSubmit={e => handleGoogleLogin(e)}>
        {config.questions.map(e => {
          switch (e.type) {
            case "text":
            case "number":
            case "tel":
            case "email":
            case "date":
              return (
                <Input
                  placeholder={e.placeholder}
                  required={e.required}
                  type={e.type}
                  halfWidth={e.halfwidth}
                  name={e.id}
                  onChange={event => handleChange(event)}
                />
              )
            case "select":
              return (
                <Select
                  placeholder={e.placeholder}
                  required={e.required}
                  type={e.type}
                  halfWidth={e.halfwidth}
                  name={e.id}
                  onChange={event => handleChange(event)}
                >
                  {e.options.map(e => (
                    <Option>{e}</Option>
                  ))}
                </Select>
              )
            default:
              return ""
          }
        })}
        <Button
          onClick={e => handleGoogleLogin(e)}
          type="submit"
          value={"Submit"}
          md
        />
      </FormWrapper>
    </>
  )
}
