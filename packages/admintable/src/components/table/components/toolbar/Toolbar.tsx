import styled from 'styled-components';
import Button from 'remote/Button';
import React, {
  useRef, useState, useReducer, useEffect,
} from 'react';
import useOutsideTouch from 'remote/useOutsideTouch';
import FilterContainer from './filter/Filter';

const ToolbarWrapper = styled('div')`
  display: flex;
  border: 1px solid ${(props) => props.theme.font};
  width: 100%;
  padding: 0.75rem;
  gap: 1rem;
`;

function Toolbar() {
  const [show, setShow] = useState<boolean>(false);
  const filterMenuRef = useRef();

  const handleShowState = () => {
    setShow((curr) => !curr);
  };

  useOutsideTouch(filterMenuRef, setShow);

  return (
    <ToolbarWrapper>
      <FilterContainer />
    </ToolbarWrapper>
  );
}

export default Toolbar;
