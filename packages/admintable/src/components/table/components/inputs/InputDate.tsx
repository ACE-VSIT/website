import { ChangeEvent, FC, memo, useRef, useState } from 'react'
import styled from 'styled-components'
import useUserInfo from '../../../../context/UserInfoContext'
import { IInputDate } from '../../interfaces/IInputDate'
import { Td } from '../Elements'
import useOnScreen from 'remote/useOnScreen'
import {TextInput} from './InputText'


const InputDate: FC<IInputDate> = ({
  customOnChange,
  customVal,
  cellId,
  disableUpdates = false,
}) => {
  const ref = useRef()
  const isOnScreen: boolean = useOnScreen(ref)
  const { userInfo, setUserInfo } = useUserInfo()
  const [dateVal, setDateVal] = useState<string>(customVal ?? '')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disableUpdates) {
      if (customOnChange) {
        customOnChange(e?.target?.value)
      } else {
        setDateVal(e?.target?.value)
        console.log(userInfo)
        setUserInfo!({
          ...userInfo!,
          [cellId!]: e?.target?.value,
        })
      }
      console.log(userInfo)
    }
  }

  return (
    <DateWrapper ref={ref as unknown as any}>
      {isOnScreen && (
        <DateInput
          type="date"
          value={dateVal}
          disabled={disableUpdates}
          onChange={e => handleOnChange(e)}
        />
      )}
    </DateWrapper>
  )
}

export default memo(InputDate)

const DateWrapper = styled(Td)`
  width: max-content;
  padding: 2px;
`
const DateInput = styled(TextInput)``