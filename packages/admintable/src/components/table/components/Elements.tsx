import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  height: 100%;
  user-select: none;
  margin: 1rem 0.75rem;
  padding: 1.25rem 1rem;
  -ms-user-select: none;
  border-collapse: collapse;
  -webkit-user-select: none;
  border: 1px solid ${props => props.theme.font + 75};

  &::-webkit-scrollbar {
    height: 4px;
  }
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

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
export const Th = styled.th`
  user-select: none;
  padding: 1.25rem 1rem;
  -ms-user-select: none;
  border-collapse: collapse;
  -webkit-user-select: none;
  border: 1px solid ${props => props.theme.font + 75};

  span {
    padding-left: 1rem;
  }
`
