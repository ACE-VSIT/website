import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import AnimateIn from '../../animations/AnimateIn'
import Loading from '../../animations/Loading'
import ProjectFilter from '../../projects/components/ProjectFilter'
import {
  TableContainer, TableContainerTable, TableContainerTitle, Td, Tr
} from '../AchievementsElements'

const Table = ({ tableData, title, breakOn = 'medium' }) => {
  const [filter, setFilter] = useState('Achievement')
  const [table, setTable] = useState(tableData)
  const [loading, setLoading] = useState(true)

  const tableHeader = [
    'Date',
    filter !== 'Achievement' ? 'Name' : 'Winner Name',
    filter === 'Achievement' ? 'Position' : false, // doing temp fix here because I didnt have time to refactor
    filter !== 'Achievement' ? 'Position' : 'Event Name',
    filter !== 'Achievement' ? 'Company' : 'College Name'
  ]

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      switch (filter) {
        case 'Placement':
          {
            const place = tableData.filter(e => e.type === 'Placement')
            setTable(place)
            setLoading(false)
          }
          break
        case 'Internship':
          {
            const intern = tableData.filter(e => e.type === 'Internship')
            setTable(intern)
            setLoading(false)
          }
          break
        case 'Freelance':
          {
            const freelance = tableData.filter(e => e.type === 'Freelance')
            setTable(freelance)
            setLoading(false)
          }
          break
        case 'Achievement':
          {
            const achieve = tableData.filter(e => e.type === 'Achievement')
            setTable(achieve)
            setLoading(false)
          }
          break
        default:
          setTable(tableData)
          setLoading(false)
      }
    }, 500)
  }, [filter, tableData])

  return (
    <AnimateIn>
      <TableContainer>
        <ProjectFilter
          categories={['Achievement', 'Freelance', 'Internship', 'Placement']}
          setState={setFilter}
        />
        <TableContainerTitle>
          <h2>{title}</h2>
          {!loading ? (
            <TableContainerTable>
              <thead>
                <Tr>
                  {tableHeader.map((col, index) => { // doing temp fix here because I didnt have time to refactor
                    return col && <th key={index}>{col}</th>
                    })}
                </Tr>
              </thead>
              <tbody>
                {table?.map(
                  ({
                    event_date: eventDate,
                    winner_name: winnerName,
                    position,
                    event_name: eventName,
                    college_name: collegeName
                  }) => {
                    return (
                      <Tr key={eventDate + winnerName}>
                        <Td>{eventDate}</Td>
                        <Td>{winnerName?.document?.data?.member_name?.text}</Td>
                        {filter === 'Achievement' && <Td>{position ?? '-'}</Td>}
                        <Td>{eventName.text}</Td>
                        <Td>{collegeName.text}</Td>
                      </Tr>
                    )
                  }
                )}
              </tbody>
            </TableContainerTable>
          ) : (
            <Loading />
          )}
        </TableContainerTitle>
      </TableContainer>
    </AnimateIn>
  )
}

Table.prototype = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  breakOn: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Table
