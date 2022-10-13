import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../AchievementsElements'

const Head = ({ title }) => {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}
export default Head
