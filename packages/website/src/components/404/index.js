import React from 'react'
import { FlexCenter } from '../../styles/sharedStyles'
import Button from '../button/Button'
import AnimateIn from '../animations/AnimateIn'

export default function NotFound () {
  return (
    <AnimateIn duration={500} delay={500}>
      <FlexCenter
        style={{
          height: 'calc(100vh - 5rem)',
          textAlign: 'center',
          flexDirection: 'column'
        }}
      >
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Button sm to={'/'} value={'Go Home'} />
      </FlexCenter>
    </AnimateIn>
  )
}
