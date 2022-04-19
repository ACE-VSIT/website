import React from "react"
import PropTypes from "prop-types"
import {
  Tr,
  Td,
  TableContainer,
  TableContainerTitle,
  TableContainerTable,
} from "../AchievementsElements"
import AnimateIn from "../../animations/AnimateIn"

const Table = ({ tableData, headingColumns, title, breakOn = "medium" }) => {
  let tableClass = "table-container_table"

  if (breakOn === "small") {
    tableClass += "table-container__table--break-sm"
  } else if (breakOn === "medium") {
    tableClass += "table-container__table--break-md"
  } else if (breakOn === "large") {
    tableClass += "table-container__table--break-lg"
  }
  const data = tableData.map(
    ({ event_date, winner_name, position, event_name, college_name }) => {
      return (
        <tr>
          <Td>{event_date}</Td>
          <Td>{winner_name?.document?.data?.member_name?.text}</Td>
          <Td>{position}</Td>
          <Td>{event_name.text}</Td>
          <Td>{college_name.text}</Td>
        </tr>
      )
    }
  )
  return (
    <AnimateIn>
      <TableContainer>
        <TableContainerTitle>
          <h2>{title}</h2>
        </TableContainerTitle>
        <TableContainerTable>
          <thead>
            <Tr>
              {headingColumns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </Tr>
          </thead>
          <tbody>{data}</tbody>
        </TableContainerTable>
      </TableContainer>
    </AnimateIn>
  )
}

Table.prototype = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  breakOn: PropTypes.oneOf(["small", "medium", "large"]),
}

export default Table
