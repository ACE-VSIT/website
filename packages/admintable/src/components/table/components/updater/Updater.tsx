import React, { useState } from 'react'
import { SyncOutlined } from '@ant-design/icons'
import styled, { keyframes } from 'styled-components'
import { Td } from '../table-elements.styles'
import { handleObjectSplit } from '../../../../utils/functions'
import useUserInfo from '../../../../context/UserInfoContext'
import { setTableUserInfo } from '../../../../utils/firebase'
import { IUserItem } from '../../../../interfaces/user.interface'

const Updater: React.FC = () => {
  const [trigger, setTrigger] = useState(false)
  const { userInfo, clearUserInfo } = useUserInfo()

  const handleUpdate = () => {
    setTrigger(prev => !prev)
    setTableUserInfo(userInfo as IUserItem)
    clearUserInfo!()
  }

  return (
    <UpdateWrapper triggerAnimation={trigger}>
      <div>
        <UpdateIcon onClick={handleUpdate} />
      </div>
    </UpdateWrapper>
  )
}

export default Updater

const UpdateIconAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const UpdateWrapper = styled(Td)<{ triggerAnimation?: boolean }>`
  width: max-content;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-duration: 1s;
    animation-name: ${props =>
      props.triggerAnimation ? UpdateIconAnimation : ''};
  }

  @media (max-width: 768px) {
    div {
      height: 4.75rem; 
    }
  }
`
const UpdateIcon = styled(SyncOutlined)`
  cursor: pointer;
  font-size: 1.25rem;
  color: ${props => props.theme.font};
`
