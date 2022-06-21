import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'
import { IInputText } from '../../interfaces/IInputText'

const InputText: FC<IInputText> = ({ customOnChange, customVal }) => {
  const [textVal, setTextVal] = useState<string>('')

  const hangeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (customOnChange) {
      customOnChange(e?.target?.value)
    } else {
      setTextVal(e?.target?.value)
    }
  }

  return (
    <TextWrapper>
      <TextInput
        value={customVal ?? textVal}
        onChange={e => hangeOnChange(e)}
      />
    </TextWrapper>
  )
}

export default InputText

const TextWrapper = styled.td`
  width: max-content;
  padding: 2px;
`
const TextInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding: 1rem 1.25rem;
  border-collapse: collapse;

  &:focus {
    outline-offset: calc(0.15rem - 2px);
    outline: 2px solid #32486175;
  }
`
