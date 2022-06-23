import React from 'react'
import Navbar from 'remote/Navbar'
import TableContainer from '../components/table'
import { NavbarConfig } from '../configs/Navbar.config'
import { Wrapper } from '../components/Index/IndexElements'
import { useAuth } from '../context/AuthContext'
import { signOutUser } from '../utils/firebase'

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth()

  const NavbarUserProfileConfig: any[] = [
    {
      name: 'Sign Out',
      onClick: () => signOutUser(logout),
    },
  ]

  return (
    <>
      <div style={{ paddingBottom: '5rem' }}>
        <Navbar
          itemList={NavbarConfig}
          userImg={user.photoUrl!}
          img="/assets/imgs/AceLogo.svg"
          profileList={NavbarUserProfileConfig}
        />
      </div>
      <Wrapper>
        <TableContainer />
      </Wrapper>
    </>
  )
}

export default Dashboard
