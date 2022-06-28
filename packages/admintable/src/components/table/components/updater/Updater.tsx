import React, { useState } from 'react'
import { SyncOutlined } from '@ant-design/icons'
import styled, { keyframes } from 'styled-components'
import { Td } from '../Elements'
import { handleObjectSplit } from '../../../../utils/functions'
import useUserInfo from '../../../../context/UserInfoContext'

const Updater: React.FC = () => {
  const [trigger, setTrigger] = useState(false)
  const { userInfo } = useUserInfo()

  const handleUpdate = () => {
    setTrigger(prev => !prev)
    const { splitValue, unsplit, split } = handleObjectSplit(userInfo!)
    const userData = {
      ...unsplit,
      [splitValue]: split,
    }
    console.log(userData)
    // clearUserInfo!()
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
`
const UpdateIcon = styled(SyncOutlined)`
  cursor: pointer;
  font-size: 1.25rem;
  color: ${props => props.theme.font};
`
