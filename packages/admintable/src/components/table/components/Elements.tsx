import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  height: 100%;
  overflow: scroll;
  user-select: none;
  padding: 1.25rem 1rem;
  -ms-user-select: none;
  border-collapse: collapse;
  -webkit-user-select: none;
  border: 1px solid ${props => props.theme.font + 75};
`

export const Thead = styled.thead``

export const Tbody = styled.tbody`
  overflow: scroll;
`

export const Td = styled.td`
  user-select: none;
  padding: 1.25rem 1rem;
  -ms-user-select: none;
  border-collapse: collapse;
  -webkit-user-select: none;
  border: 1px solid ${props => props.theme.font + 75};

  img {
    border-radius: 50%;
    outline-offset: 2px;
    outline: 1px solid ${props => props.theme.font + 75};
  }
`
export const Th = styled.th<{ resizeWidth?: number }>`
  user-select: none;
  padding: 0.25rem;
  -ms-user-select: none;
  border-collapse: collapse;
  -webkit-user-select: none;
  border: 1px solid ${props => props.theme.font + 75};
  width: ${props => (props.resizeWidth ? `${props.resizeWidth}px` : '100%')};
`
