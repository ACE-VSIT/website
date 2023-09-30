import React from 'react'
import useThemeContext from '../../../../../contexts/ThemeContext'
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
  const { isDarkTheme } = useThemeContext();
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
