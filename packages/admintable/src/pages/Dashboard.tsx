import React from 'react'
import Navbar from 'remote/Navbar'
import TableContainer from '../components/table/Index'
import { NavbarConfig } from '../configs/navbar.config'
import { Wrapper } from '../components/Index/index-elements.styled'
import { useAuth } from '../context/AuthContext'
import { signOutUser } from '../utils/firebase'
import useThemeContext from '../context/ThemeContext'
import Pagination from '../components/table/components/pagination/Pagination'

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth()
  const { isDarkTheme, setIsDarkTheme } = useThemeContext()

  const NavbarUserProfileConfig: any[] = [
    {
      name: 'Theme',
      onClick: () => setIsDarkTheme(!isDarkTheme),
    },
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
          img={
            !isDarkTheme
              ? '/assets/imgs/AceLogo.svg'
              : '/assets/imgs/ACELogoLight.svg'
          }
          profileList={NavbarUserProfileConfig}
        />
      </div>
      <Wrapper>
        <TableContainer />
        <Pagination />
      </Wrapper>
    </>
  )
}

export default Dashboard
