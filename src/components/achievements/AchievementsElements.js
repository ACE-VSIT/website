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
@media (max-width: 760px) {
	display: block; 
  position: absolute;
	top: -9999px;
	left: -9999px;
}
`
export const Tr =styled.tr`
:nth-of-type(odd) { 
  background: yellow; 
}
@media (max-width: 760px) {
	display: block;
  position: absolute;
	top: -9999px;
	left: -9999px; 
  tr { border: 1px solid #green; }
}
`
export const Td =styled.td`
padding: 6px; 
border: 1px solid #ccc; 
text-align: left;
background-color: background-color: ${props => props.theme.bg};;

&:last-child {
  border-bottom: 1px solid ${props => props.theme.secondary};;
}
@media (max-width: 760px) {
	display: block; 
  border: none;
  border-bottom: 1px solid #eee; 
  position: relative;
  padding-left: 50%; 
  :before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
}

`
export const TableContainer =styled.section`
max-width: 800px;
width: 90%;
margin: 0 auto 40px;
@media (max-width: 760px) {
	display: block; 
}

`
export const TableContainerTitle = styled.div`
text-align: center;
padding: 10px;
h2 {
  font-size: 24px;
  font-weight: 300;
}
`
export const TableContainerTable = styled.table`
width: 100%; 
border-collapse: collapse; 
@media (max-width: 760px) {
	display: block; 
}
`