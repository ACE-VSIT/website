import styled from "styled-components"
export const Header = styled.header`
padding: 50px 15px;
background-color: ${props => props.theme.bg};
text-align: center;
margin-bottom: 40px;
h1 {
  font-size: 40px;
  font-weight: 300;
}
`
export const Tr =styled.tr`
text-align:left;
padding-left: 10px;

margin-bottom: 5px;
`
export const Td =styled.td`
position: relative;
padding-left: 10px;
padding-right: 10px;
border-bottom: 0;
justify-content: center;
background-color: background-color: ${props => props.theme.bg};;

&:last-child {
  border-bottom: 1px solid ${props => props.theme.secondary};;
}

&::before {
  content: attr(data-heading);
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  padding: 0 5px;
  justify-content: center;
}
`
export const TableContainer =styled.section`
max-width: 800px;
width: 90%;
margin: 0 auto 40px;

`
export const TableContainerTitle = styled.div`
text-align: center;
padding: 10px;
h2 {
  font-size: 24px;
  font-weight: 300;
}
`
export const tableContainerTable = styled.table`
border-collapse: collapse;
thead tr {
background-color: transparent;
}
th {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}
tr:nth-child(even) {
  background-color: #f1f1f1;
}
@media (max-width: 991px) {
  thead {
    display: none;
 }
 tr {
  display: block;
  margin-bottom: 5px;
}
td {
  display: block;
  position: relative;
  padding-left: 130px;
  text-align: left;
  border-bottom: 0;
}
td:last-child {
  border-bottom: 1px solid #ddd;
}
::before {
  content: attr(data-heading);
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 0.75rem;
  padding: 0 0px;
  justify-content: center;
}

}
@media (max-width: 767px) {
  color:red
}
`