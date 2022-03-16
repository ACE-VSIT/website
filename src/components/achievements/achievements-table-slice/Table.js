import React from 'react'
import PropTypes from "prop-types"
import { Tr , Td ,TableContainer,TableContainerTitle, tableContainerTable} from '../AchievementsElements'

const Table = ({tableData, headingColumns, title,breakOn ="medium" }) => {
  let tableClass="table-container_table"

  if(breakOn=== "small"){
      tableClass += "table-container__table--break-sm"
  }else if(breakOn=== "medium"){
    tableClass += "table-container__table--break-md"
} else if(breakOn=== "large"){
    tableClass += "table-container__table--break-lg"
}
const data = tableData.map((row,index)=>{
    let rowData=[];
    let i=0;
    for(const key in row){
        rowData.push({
            key:headingColumns[i],
            val: row[key]
        })
        i++
    }
    return <tr key={index}>
        {rowData.map((data,index)=><Td key={index}  >{data.val} </Td>)}    
    </tr>
})
    return (
    <TableContainer>
        <TableContainerTitle>    
            <h2>{title}</h2>    
        </TableContainerTitle>
        <tableContainerTable  >
        <thead>
            <Tr>
                {headingColumns.map((col,index)=>(
                    <th key={index}>{col}</th>
                ))}
            </Tr>   
        </thead>    
        <tbody>
            {data}
        </tbody>
        </tableContainerTable>
    </TableContainer>
  )
}

Table.prototype ={
    tableData:PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns:PropTypes.arrayOf(PropTypes.string).isRequired,
    title:PropTypes.string.isRequired,
    breakOn:PropTypes.oneOf(["small","medium","large"])
}

export default Table