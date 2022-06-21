import React from 'react'
import { Navbar } from '@ace/common'
import TableContainer from '../components/table'
import { NavbarConfig } from '../configs/Navbar.config'
import { Wrapper } from '../components/Index/IndexElements'

const Dashboard: React.FC = () => {
  return (
    <>
      <div style={{ paddingBottom: '5rem' }}>
        <Navbar img="/assets/imgs/AceLogo.svg" itemList={NavbarConfig} />
      </div>
      <Wrapper>
        <TableContainer />
      </Wrapper>
    </>
  )
}

export default Dashboard
