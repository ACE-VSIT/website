import styled from 'styled-components'
export const Header = styled.header`
  padding: 50px 15px;
  background-color: ${props => props.theme.bg};
  text-align: center;
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
    font-weight: 300;
  }
  @media (max-width: 760px) {
    display: block;
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`
export const Tr = styled.tr`
  :nth-of-type(odd) {
    background: ${props => props.theme.bg};
  }
`
export const Td = styled.td`
  padding: 6px;
  border: 1px solid ${props => props.theme.font + 75};
  text-align: left;
  text-align: center;
  background-color: ${props => props.theme.bg};
`

export const TableContainer = styled.section`
  max-width: 800px;

  width: 90%;
  padding: 5rem 0 0 0;
  margin: 16.5rem 40px;
  @media (max-width: 954px) {
    margin-top: 270px;
  }
  @media (max-width: 760px) {
    display: block;
    top: 50%;
    left: 50%;
    align-items: center;
    margin: 0px auto;
    margin-top: 270px;
    overflow-x: scroll !important;
    width: calc(90vw + 1px);
    justify-content: center;
  }
`
export const TableContainerTitle = styled.div`
  text-align: center;
  padding: 10px;
  overflow-x: scroll !important;
  h2 {
    font-size: 24px;
    font-weight: 300;
  }
`
export const TableContainerTable = styled.table`
  display: inline-table;
  width: 100%;
  top: 20rem;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid ${props => props.theme.font + 75};

  @media (max-width: 760px) {
    display: inline-table;
    width: max-content;
    margin: 0px auto;
    border: none;
    overflow-x: scroll !important;
  }
`
