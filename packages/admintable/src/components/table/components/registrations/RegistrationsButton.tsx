import React from 'react'
import Button from 'remote/Button'
import { IRegisationsButton } from '../../../../interfaces/registrations.interface'
import { UpdateWrapper } from '../updater/Updater'

const RegistrationsButton: React.FC<IRegisationsButton> = ({
  size,
  value,
  onClick,
}) => {
  return (
    <UpdateWrapper>
      <Button
        value={value}
        onClick={onClick}
        sm={'sm' === size}
        md={'md' === size}
        lg={'lg' === size}
      />
    </UpdateWrapper>
  )
}

export default RegistrationsButton
