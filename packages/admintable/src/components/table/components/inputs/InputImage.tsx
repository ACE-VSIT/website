/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Button from 'remote/Button';
import styled from 'styled-components';
import AnimateIn from 'remote/AnimateIn';
import useOutsideTouch from 'remote/useOutsideTouch';
import React, {
  ChangeEvent, FC, useEffect, useRef, useState,
} from 'react';
import { IInputImage } from '../../../../interfaces/input.interface';
import { TextInput } from './InputText';
import useUserInfo from '../../../../contexts/UserInfoContext';
import { Td } from './styles/table-elements.styles';

const ImageWrapper = styled(Td)`
  padding: 0.5em;
  height: 7rem;
  cursor: pointer;
  display: relative;
  text-align: center;
  width: max-content;
`;

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
  color: ${(props) => props.theme.font};
  background: ${(props) => props.theme.bg};
  border: 1px solid ${(props) => props.theme.font};
  filter: drop-shadow(0 0 5px ${(props) => props.theme.font + 75});
`;

const ImageInputContainer = styled(TextInput)`
  border: 1px solid ${(props) => props.theme.font};
`;

const InputImage: FC<IInputImage> = ({
  customOnChange,
  customVal,
  cellId,
  disableUpdates = false,
}) => {
  const ref = useRef();
  const popupRef = useRef(null);
  const { userInfo, setUserInfo } = useUserInfo();
  const [profileImage, setImageSource] = useState<string>(customVal ?? '');
  const [selected, setSelected] = useState<boolean>(false);
  useOutsideTouch(popupRef, setSelected);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disableUpdates) {
      if (customOnChange) {
        customOnChange(e?.target?.value);
      } else {
        setImageSource(e?.target?.value);
        setUserInfo!({
          ...userInfo!,
          [cellId!]: e?.target?.value,
        });
      }
    }
  };

  const handlePopup = () => {
    setSelected((prev) => !prev);
  };

  return (
    <ImageWrapper ref={ref as unknown as any}>
      <img
        src={profileImage}
        alt={cellId}
        width={75}
        height={75}
        onClick={handlePopup}
        referrerPolicy="no-referrer"
      />
      {selected && (
        <AnimateIn>
          <PopupWrapper ref={popupRef}>
            <h3>{userInfo?.name}</h3>
            <ImageInputContainer
              type="text"
              value={profileImage}
              onChange={(e) => handleOnChange(e)}
            />
            <Button value="Done" sm onClick={handlePopup} />
          </PopupWrapper>
        </AnimateIn>
      )}
    </ImageWrapper>
  );
};

export default InputImage;
