import { Td } from '../Elements'
import Button from 'remote/Button'
import styled from 'styled-components'
import AnimateIn from 'remote/AnimateIn'
import useOnScreen from 'remote/useOnScreen'
import useOutsideTouch from 'remote/useOutsideTouch'
import { IInputImage } from "../../interfaces/IInputImage"
import { TextInput } from './InputText'
import useUserInfo from '../../../../context/UserInfoContext'
import { ChangeEvent, FC, memo, useEffect, useRef, useState } from 'react'

const InputImage: FC<IInputImage> = ({
  customOnChange,
  customVal,
  cellId,
  disableUpdates = false,
}) => {

  const ref = useRef()
  const popupRef = useRef(null)
  const isOnScreen: boolean = useOnScreen(ref)
  const { userInfo, setUserInfo } = useUserInfo()
  const [imageSrc, setImageSrc] = useState<string>(customVal ?? '')
  const [selected, setSelected] = useState<boolean>(false)
  useOutsideTouch(popupRef, setSelected)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disableUpdates) {
      if (customOnChange) {
        customOnChange(e?.target?.value)
      } else {
        setImageSrc(e?.target?.value)
        setUserInfo!({
          ...userInfo!,
          [cellId!]: e?.target?.value,
        })
      }
    }
  }
  useEffect(() => {
  }, [popupRef])

  const handlePopup = () => {
    setSelected(prev => !prev)
  } 

  return (
    <ImageWrapper ref={ref as unknown as any}
    >
        {isOnScreen && (
          <>
            <img
              src={imageSrc}
              alt={cellId}
              width={75}
              height={75}
              onClick={handlePopup}
            /> 
            {selected && 
              <AnimateIn>
                <PopupWrapper ref={popupRef}>
                  <h3>{userInfo?.name}</h3>
                  <SrcInput
                    type="text"  
                    value={imageSrc}
                    onChange={e => handleOnChange(e)}
                  />
                  <Button
                    value="Done"
                    sm
                    onClick={handlePopup}
                  />
                </PopupWrapper>
              </AnimateIn>}
          </>
        )}
      </ImageWrapper>
  )
}

const ImageWrapper = styled(Td)`
  padding: .5em;
  height: 7rem;
  cursor: pointer;
  display: relative;
  text-align: center;
  width: max-content;
`

const PopupWrapper = styled.div`
  top: 50%;
  gap: 1rem;
  left: 50%;
  z-index: 999;
  display: flex;
  position: fixed; 
  padding: 2rem 3rem;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.font};
  background: ${props => props.theme.bg};
  border: 1px solid ${props => props.theme.font};
  filter: drop-shadow(0 0 5px ${props => props.theme.font + 75});
`

const SrcInput = styled(TextInput)`
  border: 1px solid ${props => props.theme.font};
`

export default memo(InputImage)