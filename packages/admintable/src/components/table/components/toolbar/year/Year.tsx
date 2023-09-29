import React, { useEffect, useState } from 'react'
import useTableProps from '../../../../../contexts/TableContext'
import useThemeContext from '../../../../../contexts/ThemeContext'
import { IUser } from '../../../../../interfaces/user.interface'
import { Select } from '../filter/FilterMenu'

const Year: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('')
  const { tableData,setCurrentData } = useTableProps()
  const { isDarkTheme } = useThemeContext();
  useEffect(() => {
    if (selectedYear === '') {
    } else {
      let categoryData: IUser[] = []
      tableData?.forEach(user => {
        if (user.submissions) {
          Object.values(user.submissions).map(submissionItemKey => {
            const date = new Date(submissionItemKey.lastEditedUtc).getFullYear().toString()
            if (
              date === selectedYear && !categoryData.find(userData => userData.user === user.user)
            ) {
              categoryData.push(user)
            }
            return submissionItemKey
          }
          )
        }
      }
      )
      categoryData = categoryData.sort(
        (a: IUser, b: IUser) => a.name.localeCompare(b.name) || 0
      )
      setCurrentData(categoryData)
    }
  }, [selectedYear, setCurrentData, tableData])

  return (
    <Select
      style={{
        margin: '1px 0',
        height: 'inherit',
        width: 'max-content',
        borderColor: !isDarkTheme ? '#32486175' : '#EBF6FE75',
        background: !isDarkTheme ? '#32486125' : '#EBF6FE25',
        color: !isDarkTheme ? '#324861' : '#EBF6FE',
      }}
      value={selectedYear}
      onChange={e => {
        console.log(e.target.value)
        setSelectedYear(e.target.value)
      }}
    >
      <option value={''}>Year</option>
      {[
        ...Array.from(
          { length: new Date().getFullYear() - 2019 +1 },
          (_, i) => 2019 + i
        ),
      ].map(category => {
        const categoryKey = category
        return (
          <option value={category} key={categoryKey}>
            {category}
          </option>
        )
      })}
    </Select>
  )
}

export default Year
