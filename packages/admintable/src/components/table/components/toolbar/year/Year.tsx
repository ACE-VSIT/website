import React, { useEffect } from 'react'
import useTableProps from '../../../../../contexts/TableContext'
import useThemeContext from '../../../../../contexts/ThemeContext'
import { IUser } from '../../../../../interfaces/user.interface'
import { Select } from '../filter/FilterMenu'



const Year= ({
  options,
  setOptions
}:{
  options:{
    year: string,
    category: string,
  },
  setOptions: React.Dispatch<
    React.SetStateAction<{
      year: string
      category: string
    }>
  >,
}) => {
  // const [selectedYear, setSelectedYear] = useState('')
  const { tableData,setCurrentData } = useTableProps()
  const { isDarkTheme } = useThemeContext();
  
  useEffect(() => {
    if (options.year !== '' && options.category === '') {
      let categoryData: IUser[] = []
      tableData?.forEach(user => {
        if (user.submissions) {
          Object.values(user.submissions).map(submissionItemKey => {
            const date = new Date(submissionItemKey.lastEditedUtc).getFullYear().toString()
            if (
              date === options.year && !categoryData.find(userData => userData.user === user.user)
            ) {
              categoryData.push(user)
            }
            return submissionItemKey
          }
          )
        }
      }
      )
      setCurrentData(categoryData)
    }
  }, [options, setCurrentData, tableData])
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
      value={options.year}
      onChange={e => {
        console.log(e.target.value)
        setOptions({
          ...options,
          year: e.target.value,
        }
        )
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
