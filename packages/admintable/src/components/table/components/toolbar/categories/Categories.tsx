import React, { useEffect } from 'react'
import { questions as categoriesConfig } from '../../../../../configs/questions.config'
import useTableProps from '../../../../../contexts/TableContext'
import useThemeContext from '../../../../../contexts/ThemeContext'
import { IUser } from '../../../../../interfaces/user.interface'
import { Select } from '../filter/FilterMenu'

const Categories= ({
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
  // const [selectedCategory, setSelectedCategory] = useState('')
  const { tableData, setCurrentData } = useTableProps()
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    if (options.category !== '' && options.year === '') {
      let categoryData: IUser[] = []
      tableData?.filter(data =>{
        if (data.submissions) {
        Object.keys(data.submissions).forEach(submissionItemKey => {
          if (
            categoriesConfig[options.category].includes(submissionItemKey) && 
            !categoryData.find(user => user.user === data.user) 
          ) { 
            categoryData.push(data)
          }
        })
      }
      return data.submissions
    })
      setCurrentData(categoryData)
    }
    else if (options.year !== '' && options.category !== '') {
      const Data: IUser[] = []
      tableData?.filter(data =>{
        if (data.submissions) {
        Object.keys(data.submissions).forEach(submissionItemKey => {
          const date = new Date(data.submissions![submissionItemKey].lastEditedUtc).getFullYear().toString()
          if (
            date === options.year &&
            categoriesConfig[options.category].includes(submissionItemKey) && 
            !Data.find(user => user.user === data.user) 
          ) { 
            Data.push(data)
          }
        })
      }
      return data.submissions
    })
      setCurrentData(Data)
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
      value={options.category}
      onChange={e => {
        console.log(e.target.value)
        setOptions({
          ...options,
          category: e.target.value
        })
        
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
