import { toast } from 'react-toastify'
import styled, { keyframes } from 'styled-components'
import useOutsideTouch from 'remote/useOutsideTouch'
import React, { useRef } from 'react'
import useUserInfo from '../../../../contexts/UserInfoContext'
import useThemeContext from '../../../../contexts/ThemeContext'
import { ISubmissionItemKey } from '../../../../interfaces/user.interface'
import { IRegisationsModal } from '../../../../interfaces/registrations.interface'
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
} from '../inputs/styles/table-elements.styles'
import { TextInput } from '../inputs/InputText'
import { registrationTableHeader } from '../../../../configs/registrations.config'

const RegistrationsModalWrapperKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const RegistrationsModalWrapper = styled.div`
  top: 50%;
  left: 50%;
  gap: 1rem;
  width: 60vw;
  z-index: 99;
  height: 60vh;
  display: flex;
  padding: 0.5rem;
  position: fixed;
  overflow: scroll;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.bg};
  border: 1px solid ${props => props.theme.font};
  animation: ${RegistrationsModalWrapperKeyframes} 0.3s ease-in-out;
`

const RegistrationsModal: React.FC<IRegisationsModal> = ({ setState }) => {
  const regModalRef = useRef()
  const { userInfo } = useUserInfo()
  const { isDarkTheme } = useThemeContext()
  const registrationsModalRef = useRef(false)

  // Another approach
  // const [registrationTableHeaderKeys, setRegistrationTableHeaderKeys] =
  //   useState(() => {
  //     if (userInfo?.submissions) {
  //       return Object.keys(
  //         userInfo?.submissions[Object.keys(userInfo?.submissions)[0]]
  //       ).map((key: string) => camel2title(key))
  //     } else {
  //       return []
  //     }
  //   })

  useOutsideTouch(regModalRef, setState)

  const hasSubmissions = () => {
    if (registrationsModalRef.current) return
    if (!userInfo?.submissions) {
      toast.error('No submissions found!', {
        toastId: 'registrationsModalRefToast',
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkTheme ? 'dark' : 'light',
      })
      registrationsModalRef.current = true
      setState(false)
    }
  }

  hasSubmissions()

  const getInputType = (type: string, value: string) => {
    switch (type) {
      case 'text':
        return <TextInput readOnly centerText value={value} />
      case 'image':
        return (
          <img
            src={value}
            width={75}
            height={75}
            alt="submission"
            referrerPolicy="no-referrer"
          />
        )
      case 'date':
        const date = new Date(value)
        return <TextInput readOnly centerText value={date.toDateString()} />
      case 'link':
        return (
          <a href={value} target="_blank" rel="noreferrer">
            <TextInput readOnly centerText value={'Open URL'} />
          </a>
        )
      default:
        return null
    }
  }

  if (!userInfo?.submissions) {
    return null
  }
  return (
    <RegistrationsModalWrapper ref={regModalRef as any}>
      <Table style={{ height: 'max-content', width: 'max-content' }}>
        <Thead>
          {registrationTableHeader.map(el => {
            return <Th key={el.accessor}>{el.Header}</Th>
          })}
        </Thead>
        <Tbody>
          {Object.keys(userInfo?.submissions!)?.map((submissionItem, index) => (
            <tr key={`${userInfo?.uid}${index}`}>
              {registrationTableHeader.map(el => {
                return (
                  <Td key={el.accessor}>
                    {getInputType(
                      el.type,
                      userInfo?.submissions![submissionItem]![
                        el.accessor as ISubmissionItemKey
                      ]! as string
                    )}
                  </Td>
                )
              })}
            </tr>
          ))}
        </Tbody>
      </Table>
    </RegistrationsModalWrapper>
  )
}

export default RegistrationsModal
