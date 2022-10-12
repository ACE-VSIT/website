/* eslint-disable no-case-declarations */
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../../context/auth/AuthContext'
import { FirebaseContext } from '../../../../context/FirebaseContext'
import { Input, Select, FormWrapper, Option, ErrorBox } from './FormElements'
import Button from '../../../button/Button'
import config from './FormConfig.json'
import { checkEmailVerfiy, savePersonalDetails } from '../../../../firebase'
import { FlexCenter, Heading } from '../../../../styles/sharedStyles'
import Check from '../../../animations/Check'
import Loading from '../../../animations/Loading'
import { navigate } from 'gatsby'
import { ButtonWrapper as ButtonElement } from '../Google/LoginElements'

export default function Form() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    enrollmentNo: '',
    course: '',
    section: '',
  })
  const { user } = useContext(AuthContext)
  const { personalDetails, setIsVerified, isVerified } =
    useContext(FirebaseContext)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [customError, setCustomError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    setError(false)
    switch (e.target.name) {
      case 'firstName':
      case 'lastName':
        if (e.target.value.length > 25) {
          setCustomError(
            `${e.target.placeholder} should be less than 25 characters.`
          )
        } else {
          setCustomError(false)
        }
        break

      case 'mobile':
        const mobileRegExp = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/
        if (!e.target.value) {
          setCustomError(false)
        } else {
          if (!mobileRegExp.test(e.target.value)) {
            setCustomError(`${e.target.placeholder} is not correct`)
          } else {
            setCustomError(false)
          }
        }
        break
      case 'enrollmentNo':
        const enrollmentNoRegExp = /^[a-zA-Z0-9]{10,11}$/
        if (!e.target.value) {
          setCustomError(false)
        } else {
          if (!enrollmentNoRegExp.test(e.target.value)) {
            setCustomError(`${e.target.placeholder} is not correct`)
          } else {
            setCustomError(false)
          }
        }
        break
      default:
        break
    }
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSavePersonalInfo = async e => {
    const { firstName, lastName, mobile, enrollmentNo, section, course, dob } =
      input
    if (
      firstName &&
      lastName &&
      mobile &&
      enrollmentNo &&
      section &&
      course &&
      dob
    ) {
      setError(false)
      setSubmitted(true)
      await checkEmailVerfiy(setIsVerified)
      if (isVerified) {
        savePersonalDetails(user.email, input)
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    } else {
      setError(true)
    }
  }

  const ButtonWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }
  }, [submitted, setSubmitted])

  useEffect(() => {
    if (success) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => {
        window.location.href = '/register/question/'
      }, 3500)
    }
  }, [success])

  return (
    <>
      {personalDetails ? (
        !personalDetails[0]?.completed ? (
          <>
            {!success ? (
              <>
                <Heading>Personal Details</Heading>
                <FormWrapper onSubmit={e => handleSavePersonalInfo(e)}>
                  {config.questions.map(e => {
                    switch (e.type) {
                      case 'text':
                      case 'number':
                      case 'tel':
                      case 'date':
                        return (
                          <Input
                            placeholder={e.placeholder}
                            required={e.required}
                            type={e.type}
                            halfWidth={e.halfwidth}
                            name={e.id}
                            min={e.min ?? ''}
                            max={e.max ?? ''}
                            disabled={e.disabled ?? false}
                            onChange={event => handleChange(event)}
                          />
                        )
                      case 'select':
                        return (
                          <Select
                            placeholder={e.placeholder}
                            required={e.required}
                            type={e.type}
                            halfWidth={e.halfwidth}
                            name={e.id}
                            defaultValue={e.options[0]}
                            onChange={event => handleChange(event)}
                          >
                            {e.options.map((e, index) => (
                              <Option key={e + index}>{e}</Option>
                            ))}
                          </Select>
                        )
                      case 'email':
                        return (
                          <Input
                            placeholder={e.placeholder}
                            required={e.required}
                            type={e.type}
                            halfWidth={e.halfwidth}
                            name={e.id}
                            disabled={true}
                            value={user?.email}
                          />
                        )
                      default:
                        return ''
                    }
                  })}
                  {error && <ErrorBox>{config.errorText}</ErrorBox>}
                  {customError && <ErrorBox>{customError}</ErrorBox>}
                  {submitted &&
                    (isVerified ? (
                      <ErrorBox success>{config.emailVerified}</ErrorBox>
                    ) : (
                      <FlexCenter
                        style={{
                          gap: '0',
                          flexWrap: 'nowrap',
                          flexDirection: 'row',
                        }}
                      >
                        <ErrorBox style={{ borderRight: '0' }}>
                          {config.emailVerification}
                        </ErrorBox>
                        <ButtonElement
                          onClick={async () =>
                            await checkEmailVerfiy(setIsVerified)
                          }
                          style={{ borderLeft: '0' }}
                          md={'md'}
                          primary={'primary'}
                        >
                          Update
                        </ButtonElement>
                      </FlexCenter>
                    ))}
                  <div
                    role={'button'}
                    tabIndex={0}
                    style={ButtonWrapper}
                    onClick={e => handleSavePersonalInfo(e)}
                    onKeyDown={e => handleSavePersonalInfo(e)}
                  >
                    <Button type="submit" value={'Submit'} md={'md'} />
                  </div>
                </FormWrapper>
              </>
            ) : (
              <div style={{ opacity: 0.9 }}>
                <Check />
              </div>
            )}
          </>
        ) : (
          navigate('/register/question/')
        )
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  )
}
