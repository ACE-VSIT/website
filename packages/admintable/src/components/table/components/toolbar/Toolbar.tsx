import styled from 'styled-components'
import { useRef, useState } from 'react'
import useOutsideTouch from 'remote/useOutsideTouch'
import FilterContainer from './filter/Filter'
import { UpdateIcon, UpdateWrapper } from '../updater/Updater'

function Toolbar({
  reFetchUserDataWithoutCache,
}: {
  reFetchUserDataWithoutCache: any
}) {
  const filterMenuRef = useRef()
  const [, setShow] = useState<boolean>(false)
  useOutsideTouch(filterMenuRef, setShow)
  const [trigger, setTrigger] = useState(false)

  const triggerFetchUserData = () => {
    setTrigger(trigger => !trigger)
    reFetchUserDataWithoutCache()
  }

  return (
    <ToolbarWrapper>
      <FilterContainer />
      <UpdateWrapper
        triggerAnimation={trigger}
        onClick={() => triggerFetchUserData()}
      >
        <div>
          <UpdateIcon />
        </div>
      </UpdateWrapper>
    </ToolbarWrapper>
  )
}

export default Toolbar

const ToolbarWrapper = styled('div')`
  gap: 1rem;
  width: 100%;
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.font + 75};
`
