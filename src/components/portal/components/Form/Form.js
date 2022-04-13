import React, { useState, useContext } from "react"
import { AuthContext } from "../../../../context/auth/AuthContext"
import { Input, Select, FormWrapper, Option } from "./FormElements"
import Button from "../../../button/Button"
import config from "./FormConfig.json"
import { savePersonalDetails } from "../../../../firebase"
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
  const { user } = useContext(AuthContext)
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSavePersonalInfo = e => {
    savePersonalDetails(user.email, input)
  }

  const ButtonWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }

  return (
    <>
      <Heading>Personal Details</Heading>
      <FormWrapper onSubmit={e => handleSavePersonalInfo(e)}>
        {config.questions.map(e => {
          switch (e.type) {
            case "text":
            case "number":
            case "tel":
            case "date":
              return (
                <Input
                  placeholder={e.placeholder}
                  required={e.required}
                  type={e.type}
                  halfWidth={e.halfwidth}
                  name={e.id}
                  min={e.min ?? ""}
                  max={e.max ?? ""}
                  disabled={e.disabled ?? false}
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
            case "email":
              return (
                <Input
                  placeholder={e.placeholder}
                  required={e.required}
                  type={e.type}
                  halfWidth={e.halfwidth}
                  name={e.id}
                  disabled={true}
                  value={user.email}
                />
              )
            default:
              return ""
          }
        })}
        <div
          role={"button"}
          tabIndex={0}
          style={ButtonWrapper}
          onClick={e => handleSavePersonalInfo(e)}
          onKeyDown={e => handleSavePersonalInfo(e)}
        >
          <Button type="submit" value={"Submit"} md />
        </div>
      </FormWrapper>
    </>
  )
}
