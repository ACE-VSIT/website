import { ChangeEvent, FC, memo, useRef, useState } from 'react'
import styled from 'styled-components'
import useUserInfo from '../../../../context/UserInfoContext'
import { IInputText } from '../../interfaces/IInputText'
import { Td } from '../Elements'
import useOnScreen from 'remote/useOnScreen'

const InputText: FC<IInputText> = ({
  customOnChange,
  customVal,
  cellId,
  disableUpdates = false,
}) => {
  const ref = useRef()
  const isOnScreen: boolean = useOnScreen(ref)
  const { userInfo, setUserInfo } = useUserInfo()
  const [textVal, setTextVal] = useState<string>(customVal ?? '')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disableUpdates) {
      if (customOnChange) {
        customOnChange(e?.target?.value)
      } else {
        setTextVal(e?.target?.value)
        setUserInfo!({
          ...userInfo!,
          [cellId!]: e?.target?.value,
        })
      }
    }
  }

  return (
    <TextWrapper ref={ref as unknown as any}>
      {isOnScreen && (
        <TextInput
          value={textVal}
          disabled={disableUpdates}
          onChange={e => handleOnChange(e)}
        />
      )}
    </TextWrapper>
  )
}

export default memo(InputText)

const TextWrapper = styled(Td)`
  width: max-content;
  padding: 2px;
`
export const TextInput = styled.input<{ disabled?: boolean }>`
  height: 100%;
  width: 100%;
  border: none;
  padding: 1rem 1.25rem;
  border-collapse: collapse;
  color: ${props => props.theme.font};
  background: ${props => props.theme.bg};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'text')};

  &:focus {
    outline-offset: calc(0.15rem - 2px);
    outline: 2px solid ${props => props.theme.font + '75'};
  }
`
