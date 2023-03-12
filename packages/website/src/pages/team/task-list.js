import { graphql } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/index'
import Seo from '../../components/SEO'

const tasks = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Tasks" />
      <IFrame src="https://coda.io/embed/l10l1cfAIp/_suEFM?viewMode=embedplay" />
    </Layout>
  )
}

export default tasks

export const IndexQuery = graphql`
  query tasks {
    prismicLayout {
      ...navbarInfo
    }
  }
`

const IFrame = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`
