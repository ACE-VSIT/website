import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { ISelectOption } from '../../../../interfaces/select-option.interface';
import { Td } from './styles/table-elements.styles';

const OptionsWrapper = styled(Td)`
  width: max-content;
  padding: 2px;
`;
const Option = styled.select<{ disabled?: boolean }>`
  height: 100%;
  width: 100%;
  border: none;
  padding: 1rem 1.25rem;
  border-collapse: collapse;
  color: ${(props) => props.theme.font};
  background: ${(props) => props.theme.bg};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};

  &:focus {
    outline-offset: calc(0.15rem - 2px);
    outline: 2px solid #32486175;
  }
`;

const SelectOption: React.FC<ISelectOption<string | number>> = ({
  name,
  options,
  customValue,
  optionsValue,
  customOnChange,
  showCustomValue,
  disableUpdates = false,
}) => {
  const ref = useRef();
  const [selectVal, setSelectVal] = useState<string>();

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!disableUpdates) {
      if (customOnChange) {
        customOnChange(e);
      } else {
        setSelectVal(e?.target?.value);
      }
    }
  };

  return (
    <OptionsWrapper ref={ref as unknown as any}>
      <Option
        name={name}
        disabled={disableUpdates}
        onChange={(e) => handleOnChange(e)}
        value={showCustomValue ? customValue : selectVal ?? optionsValue![0]}
      >
        {options?.map((e, index) => (
          <option key={optionsValue![index]} value={optionsValue![index] ?? e}>
            {e}
          </option>
        ))}
      </Option>
    </OptionsWrapper>
  );
};

export default SelectOption;
