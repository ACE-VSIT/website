import { navigate } from "gatsby"
import React, { useContext } from "react"
import Loading from "../../components/animations/Loading"
import { FirebaseContext } from "../../context/FirebaseContext"
import { Questions as QuestionHandler } from "../../components/portal/components/Questions/Questions"

export default function Questions() {
  const { personalDetails } = useContext(FirebaseContext)

  return (
    <>
      {personalDetails ? (
        personalDetails[0]?.completed ? (
          <div>
            <QuestionHandler />
          </div>
        ) : (
          navigate("/register/")
        )
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  )
}
