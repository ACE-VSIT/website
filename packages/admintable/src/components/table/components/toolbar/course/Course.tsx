import useThemeContext from '../../../../../contexts/ThemeContext';
import { IToolbar } from '../../../../../interfaces/toolbar.interface';
import { Select } from '../filter/FilterMenu';

const Course= ({options,setOptions}:IToolbar) => {
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
      value={options.course}
      onChange={e => {
        setOptions({
          ...options,
          course: e.target.value as "" | "MCA" | "BCA" | "Other",
        })
      }}
    >
      <option value={''}>Course</option>
      {["MCA","BCA","Others"].map(category => {
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

export default Course
