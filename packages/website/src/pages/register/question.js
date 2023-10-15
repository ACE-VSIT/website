import { navigate } from 'gatsby'
import React, { useContext } from 'react'
import Loading from '../../components/animations/Loading'
import { Questions as QuestionHandler } from '../../components/portal/components/Questions/Questions'
import { FirebaseContext } from '../../context/FirebaseContext'

export default function Questions () {
  const { personalDetails } = useContext(FirebaseContext)

  return (
    <>
      {personalDetails ? (
        personalDetails[0]?.completed ? (
            <QuestionHandler />)
        : (
          navigate('/register/')
        )
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  )
}
