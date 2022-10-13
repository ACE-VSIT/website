import React, { useContext, useEffect, useState } from 'react'
import Form from './components/Form/Form'
import { AuthContext } from '../../context/auth/AuthContext'
import { FlexCenter } from '../../styles/sharedStyles'
import LoginWithGoogle from './components/Google/LoginWithGoogle'
import Loading from '../animations/Loading'

export default function PortalForm () {
  const { user, loading } = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (user) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }, [user])

  return (
    <>
      <FlexCenter style={{ flexDirection: 'column' }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {!showForm && <LoginWithGoogle />}
            {showForm && <Form />}
          </>
        )}
      </FlexCenter>
    </>
  )
}
