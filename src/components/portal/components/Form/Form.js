import React, { useState, useContext } from "react"
import { AuthContext } from "../../../../context/auth/AuthContext"
import { Input, Select, FormWrapper, Option, ErrorBox } from "./FormElements"
import Button from "../../../button/Button"
import config from "./FormConfig.json"
import { savePersonalDetails } from "../../../../firebase"
import { Heading } from "../../../../styles/sharedStyles"
import Check from "../../../animations/Check"

export default function Form() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    enrollmentNo: "",
    section: "",
  })
  const { user } = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSavePersonalInfo = e => {
    const { firstName, lastName, mobile, enrollmentNo, section } = input
    if (firstName && lastName && mobile && enrollmentNo && section) {
      setError(false)
      savePersonalDetails(user.email, input)
      setSuccess(true)
    } else {
      setError(true)
    }
  }

  const ButtonWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }

  return (
    <>
      {!success ? (
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
            {error && <ErrorBox>{config.errorText}</ErrorBox>}
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
      ) : (
        <div style={{ opacity: 0.9 }}>
          <Check />
        </div>
      )}
    </>
  )
}
