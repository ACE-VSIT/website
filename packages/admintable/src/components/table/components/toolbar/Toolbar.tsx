import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import useOutsideTouch from 'remote/useOutsideTouch'
import styled from 'styled-components'
import { questions as categoriesConfig } from '../../../../configs/questions.config'
import useTableProps from '../../../../contexts/TableContext'
import useThemeContext from '../../../../contexts/ThemeContext'
import { UpdateIcon, UpdateWrapper } from '../updater/Updater'
import Categories from './categories/Categories'
import FilterContainer from './filter/Filter'

import { IToolbarOptions } from '../../../../interfaces/toolbar.interface'
import { IUser } from '../../../../interfaces/user.interface'
import Course from './course/Course'
import Year from './year/Year'

function Toolbar({
  reFetchUserDataWithoutCache,
}: {
  reFetchUserDataWithoutCache: any
}) {
  const filterMenuRef = useRef()
  const [, setShow] = useState<boolean>(false)
  useOutsideTouch(filterMenuRef, setShow)
  const { tableData, setCurrentData,tableFilters } = useTableProps()
  const { isDarkTheme } = useThemeContext()
  const [trigger, setTrigger] = useState(false)
  const [options,setOptions] = useState<IToolbarOptions>({
    year: '',
    category: '',
    course: '',
  })
  const TrimData = useCallback((Data: IUser[]):IUser[] => {
    if (tableFilters?.listLength) {
      return Data.slice(0, tableFilters?.listLength === '*' ? Data.length : tableFilters?.listLength )
    }
    return Data;
  }, [tableFilters?.listLength])

  useEffect(() => {
    if (!tableData) {
      setCurrentData([]);
      return;
    }
  
    let filteredData = tableData;

    if (options.category !== '' && options.year === '') {
      filteredData = tableData.filter(data => data.submissions && Object.keys(data.submissions).some(submissionItemKey =>
        categoriesConfig[options.category].includes(submissionItemKey)
      ));
    } else if (options.year !== '') {
      filteredData = tableData.filter(data => data.submissions && Object.keys(data.submissions).some(submissionItemKey => {
        const date = new Date(data.submissions![submissionItemKey].lastEditedUtc).getFullYear().toString();
        return date === options.year && (options.category === '' || categoriesConfig[options.category].includes(submissionItemKey));
      }));
    }
    if (options.course !== '') {
      filteredData = filteredData.filter(data => data.personalDetails.course === options.course);
    }
    setCurrentData(options.category === '' && options.year === '' ? TrimData(tableData) : TrimData(filteredData));
  
  }, [TrimData, options, setCurrentData, tableData]);
  
  
  const triggerFetchUserData = async () => {
    try {
      setTrigger(trigger => !trigger)
      await reFetchUserDataWithoutCache()
      toast.info('Fetched latest data!', {
        toastId: 'toolbarFetchUserDataWithoutCache',
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkTheme ? 'dark' : 'light',
      })
    } catch (error) {
      toast.error(JSON.stringify(error), {
        toastId: 'toolbarFetchUserDataWithoutCache',
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkTheme ? 'dark' : 'light',
      })
    }
  }

  return (
    <ToolbarWrapper>
      <UpdateWrapper
        triggerAnimation={trigger}
        onClick={() => triggerFetchUserData()}
      >
        <div>
          <UpdateIcon />
        </div>
      </UpdateWrapper>
      <FilterContainer />
      <Categories options={options} setOptions={setOptions} />
      <Year options={options} setOptions={setOptions}/>
      <Course options={options} setOptions={setOptions}/>
      
    </ToolbarWrapper>
  )
}

export default memo(Toolbar)

const ToolbarWrapper = styled('div')`
  gap: 1rem;
  width: 100%;
  display: flex;
  padding: 0.75rem;
  justify-content: flex-start;
  border: 1px solid ${props => props.theme.font + 75};
`
