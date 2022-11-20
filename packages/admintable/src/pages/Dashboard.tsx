import React, { memo } from 'react'
import Navbar from 'remote/Navbar'
import { Wrapper } from '../components/index-elements.styles'
import Pagination from '../components/table/components/pagination/Pagination'
import TableContainer from '../components/table/TableContainer'
import { NavbarConfig } from '../configs/navbar.config'
import { useAuth } from '../contexts/AuthContext'
import useThemeContext from '../contexts/ThemeContext'
import ErrorBoundary from '../utils/ErrorBoundary'
import { signOutUser } from '../utils/firebase'

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
      <ErrorBoundary>
        <Wrapper>
          <TableContainer />
          <Pagination />
        </Wrapper>
      </ErrorBoundary>
    </>
  )
}

export default memo(Dashboard)
