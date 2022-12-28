import React, { useEffect, useState } from 'react'
import { questions as categoriesConfig } from '../../../../../configs/questions.config'
import useTableProps from '../../../../../contexts/TableContext'
import useThemeContext from '../../../../../contexts/ThemeContext'
import { IUser } from '../../../../../interfaces/user.interface'
import { Select } from '../filter/FilterMenu'

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { tableData, setCurrentData } = useTableProps()
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    if (selectedCategory === '') {
      tableData?.sort((a: IUser, b: IUser) => a.name.localeCompare(b.name) || 0)
      setCurrentData(tableData || [])
    } else {
      let categoryData: IUser[] = []
      tableData?.filter(data =>
        Object.keys(data.submissions || {}).forEach(submissionItemKey => {
          if (
            categoriesConfig[selectedCategory].includes(submissionItemKey) &&
            !categoryData.find(user => user.user === data.user)
          ) {
            categoryData.push(data)
          }
        })
      )
      categoryData = categoryData.sort(
        (a: IUser, b: IUser) => a.name.localeCompare(b.name) || 0
      )
      setCurrentData(categoryData)
    }
  }, [selectedCategory, setCurrentData, tableData])

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
      value={selectedCategory}
      onChange={e => {
        console.log(e.target.value)
        setSelectedCategory(e.target.value)
      }}
    >
      <option value={''}>Default</option>
      {Object.keys(categoriesConfig).map(category => {
        const categoryKey = category
          .toLowerCase()
          .replaceAll(' ', '_')
          .replaceAll('/', '-')
        return (
          <option value={category} key={categoryKey}>
            {category}
          </option>
        )
      })}
    </Select>
  )
}

export default Categories
