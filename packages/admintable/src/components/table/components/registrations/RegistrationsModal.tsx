import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import useOutsideTouch from 'remote/useOutsideTouch'
import styled, { keyframes } from 'styled-components'
import { registrationTableHeader } from '../../../../configs/registrations.config'
import useTableProps from '../../../../contexts/TableContext'
import useThemeContext from '../../../../contexts/ThemeContext'
import useUserInfo from '../../../../contexts/UserInfoContext'
import { IRegisationsModal } from '../../../../interfaces/registrations.interface'
import {
  ISubmissionItemKey,
  IUser,
  IUserItem
} from '../../../../interfaces/user.interface'
import { setTableUserInfo } from '../../../../utils/firebase'
import { tableDataAndLocalStorage } from '../../../../utils/functions'
import { TextInput } from '../inputs/InputText'
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead
} from '../inputs/styles/table-elements.styles'
import { UpdateIcon, UpdateWrapper } from '../updater/Updater'

const RegistrationsModalWrapperKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const RegistrationsModalWrapperBackdrop = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${RegistrationsModalWrapperKeyframes} 0.3s ease-in-out;
`

const RegistrationsModalWrapper = styled.div<{ isDarkTheme?: boolean }>`
  gap: 1rem;
  width: 75vw;
  height: 60vh;
  display: flex;
  padding: 0.5rem;
  overflow: scroll;
  outline-offset: 2px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${props => props.theme.bg};
  border: 1px solid ${props => props.theme.font};
  outline: 4px solid
    ${props => (props.isDarkTheme ? props.theme.font : props.theme.bg)};
  animation: ${RegistrationsModalWrapperKeyframes} 0.3s ease-in-out;
`

const RegistrationsModal: React.FC<IRegisationsModal> = ({ setState }) => {
  const regModalRef = useRef()
  const { isDarkTheme } = useThemeContext()
  const registrationsModalRef = useRef(false)
  const triggerUpdateAnimationRef = useRef(false)
  const { userInfo, setUserInfo } = useUserInfo()
  const { tableData, setTableData, currentData, setCurrentData } =
    useTableProps()

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

  const updateUserInfoHandler = async (
    value: string | boolean,
    taskName: string,
    name: string
  ) => {
    let newUserInfo: any = { ...userInfo }
    newUserInfo = {
      ...newUserInfo,
      submissions: {
        ...(newUserInfo.submissions && newUserInfo.submissions),
        [taskName]: {
          ...(newUserInfo.submissions && newUserInfo.submissions[taskName]),
          [name]: value,
        },
      },
    }

    // Update table data in both Current and non-Current data table
    const userIndex = tableData?.findIndex(
      (user: IUserItem) => user.uid === userInfo!.uid
    )
    const currentDataIndex = currentData?.findIndex(
      (user: IUserItem) => user.uid === userInfo!.uid
    )
    const newCurrentTableData = [...(currentData as IUserItem[])]
    const newTableData = [...(tableData as IUserItem[])]
    if (userIndex && newCurrentTableData) {
      newTableData[userIndex] = newUserInfo
      newCurrentTableData[currentDataIndex!] = newUserInfo
      newTableData.sort(
        (a: IUserItem, b: IUserItem) => a.name.localeCompare(b.name) || 0
      )
      setTableData!(newTableData as IUser[])
      setCurrentData(newCurrentTableData as IUser[])
      tableDataAndLocalStorage().setData(newTableData)
    }

    setUserInfo!(newUserInfo as IUser)
  }

  const saveUserInfoHandler = async () => {
    try {
      await setTableUserInfo(userInfo as IUserItem)
      toast.success('User sumission Status updated', {
        toastId: 'userSubmissionStatusModalRefToast',
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkTheme ? 'dark' : 'light',
      })
    } catch (error) {
      toast.error('Something went wrong!', {
        toastId: 'userSubmissionStatusModalRefToast',
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkTheme ? 'dark' : 'light',
      })
    }
  }

  const getInputType = (
    el: typeof registrationTableHeader[0],
    value: string,
    taskName: string
  ) => {
    switch (el.type) {
      case 'text':
        return (
          <TextInput
            readOnly={el.readonly}
            centerText
            value={value}
            customWidth={el.customWidth}
            onChange={e => {
              !el.readonly &&
                updateUserInfoHandler(
                  e.target.value.toString(),
                  taskName,
                  el.accessor
                )
            }}
          />
        )
      case 'image':
        return (
          <img
            src={value}
            width={75}
            height={75}
            alt={'submission'}
            referrerPolicy={'no-referrer'}
          />
        )
      case 'date':
        const date = new Date(value)
        return (
          <TextInput
            centerText
            readOnly={el.readonly}
            value={date.toDateString()}
            onChange={e => {
              !el.readonly &&
                updateUserInfoHandler(
                  e.target.value.toString(),
                  taskName,
                  el.accessor
                )
            }}
          />
        )
      case 'link':
        return (
          <a href={value} target="_blank" rel="noreferrer">
            <TextInput
              pointer
              centerText
              value={'Open Link'}
              readOnly={el.readonly}
            />
          </a>
        )
      case 'checkbox':
        return (
          <div style={{ width: '100%', height: '50%' }}>
            <TextInput
              centerText
              type={'checkbox'}
              readOnly={el.readonly}
              checked={value === 'true'}
              onChange={e => {
                !el.readonly &&
                  updateUserInfoHandler(
                    e.target.checked.toString(),
                    taskName,
                    el.accessor
                  )
              }}
            />
          </div>
        )
      default:
        return null
    }
  }

  useEffect(() => {
    if (triggerUpdateAnimationRef.current) {
      setTimeout(() => {
        triggerUpdateAnimationRef.current = false
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerUpdateAnimationRef.current])

  if (!userInfo?.submissions) {
    return null
  }

  return (
    <RegistrationsModalWrapperBackdrop>
      <RegistrationsModalWrapper
        ref={regModalRef as any}
        isDarkTheme={isDarkTheme}
      >
        <UpdateWrapper triggerAnimation={triggerUpdateAnimationRef.current}>
          <div>
            <UpdateIcon onClick={() => saveUserInfoHandler()} />
          </div>
        </UpdateWrapper>
        <Table style={{ height: 'max-content', width: 'max-content' }}>
          <Thead>
            <tr>
            {registrationTableHeader.map(el => {
              return <Th key={el.accessor}>{el.Header}</Th>
            })}
            </tr>
          </Thead>
          <Tbody>
            {Object.keys(userInfo?.submissions!)
              ?.sort(
                (a, b) =>
                  userInfo?.submissions![a]!.name!.localeCompare(
                    userInfo?.submissions![b]!.name!
                  ) || 0
              )
              ?.map((submissionItem, index) => (
                <tr key={`${userInfo?.uid}${index}`}>
                  {registrationTableHeader.map(el => {
                    if (el.accessor === 'taskname') {
                      return (
                        <Td key={el.accessor}>
                          {getInputType(
                            el,
                            submissionItem
                              .split('-')
                              .join(' ')
                              .charAt(0)
                              .toUpperCase() +
                              submissionItem.split('-').join(' ').slice(1),
                            submissionItem
                          )}
                        </Td>
                      )
                    }
                    return (
                      <Td key={el.accessor}>
                        {getInputType(
                          el,
                          userInfo?.submissions![submissionItem]![
                            el.accessor as ISubmissionItemKey
                          ]! as string,
                          submissionItem
                        )}
                      </Td>
                    )
                  })}
                </tr>
              ))}
          </Tbody>
        </Table>
      </RegistrationsModalWrapper>
    </RegistrationsModalWrapperBackdrop>
  )
}

export default RegistrationsModal
