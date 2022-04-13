import { navigate } from "gatsby"
import React, { useContext } from "react"
import Loading from "../../components/animations/Loading"
import { FirebaseContext } from "../../context/FirebaseContext"

export default function Questions() {
  const { personalDetails } = useContext(FirebaseContext)

  return (
    <>
      {personalDetails ? (
        personalDetails[0]?.completed ? (
          <div>Questions will be shown now</div>
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
