import { memo, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import useOutsideTouch from 'remote/useOutsideTouch'
import styled from 'styled-components'
import { questions as categoriesConfig } from '../../../../configs/questions.config'
import useTableProps from '../../../../contexts/TableContext'
import useThemeContext from '../../../../contexts/ThemeContext'
import { IUser } from '../../../../interfaces/user.interface'
import { UpdateIcon, UpdateWrapper } from '../updater/Updater'
import Categories from './categories/Categories'
import FilterContainer from './filter/Filter'

import Year from './year/Year'

function Toolbar({
  reFetchUserDataWithoutCache,
}: {
  reFetchUserDataWithoutCache: any
}) {
  const filterMenuRef = useRef()
  const [, setShow] = useState<boolean>(false)
  useOutsideTouch(filterMenuRef, setShow)
  const { tableData, setCurrentData } = useTableProps()
  const { isDarkTheme } = useThemeContext()
  const [trigger, setTrigger] = useState(false)
  const [options,setOptions] = useState({
    year: '',
    category: '',
  })

  useEffect(() => {
    if (!tableData){
      setCurrentData([])
    }
    else{
      if (options.category !== '' && options.year === '') {
        let categoryData: IUser[] = []
        tableData?.forEach(data =>{
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
      })
        setCurrentData(categoryData)
      }
      else if (options.year !== '' && options.category !== '') {
        const Data: IUser[] = []
        tableData?.forEach(data =>{
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
      })
        setCurrentData(Data)
      }
      else if (options.year !== '' && options.category === '') {
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
      else {
        setCurrentData(tableData )
      }
    }
    
  }, [options, setCurrentData, tableData])
  
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
