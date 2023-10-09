import { questions as categoriesConfig } from '../../../../../configs/questions.config';
import useThemeContext from '../../../../../contexts/ThemeContext';
import { IToolbar } from '../../../../../interfaces/toolbar.interface';
import { Select } from '../filter/FilterMenu';

const Categories= ({options,setOptions}:IToolbar) => {
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
      value={options.category}
      onChange={e => {
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
