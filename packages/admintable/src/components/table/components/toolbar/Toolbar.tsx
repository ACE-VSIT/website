import { memo, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import useOutsideTouch from 'remote/useOutsideTouch'
import styled from 'styled-components'
import useThemeContext from '../../../../contexts/ThemeContext'
import { UpdateIcon, UpdateWrapper } from '../updater/Updater'
import FilterContainer from './filter/Filter'

function Toolbar({
  reFetchUserDataWithoutCache,
}: {
  reFetchUserDataWithoutCache: any
}) {
  const filterMenuRef = useRef()
  const [, setShow] = useState<boolean>(false)
  useOutsideTouch(filterMenuRef, setShow)
  const { isDarkTheme } = useThemeContext()
  const [trigger, setTrigger] = useState(false)

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
