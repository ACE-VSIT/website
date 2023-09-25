import { EyeOutlined, UploadOutlined } from '@ant-design/icons'
import React from 'react'
import useWindowSize from '../../../../../hooks/useWindowSize'
import { FlexCenter } from '../../../../../styles/sharedStyles'
import RichText from '../../../../rich-text'
import { ButtonWrapper } from '../../Google/LoginElements'
import {
  Container,
  TimelineCardInfo,
  TimelineCardTitle,
  TimelineCardWrapper,
  TimelineDifficulty,
  TimelinePoint,
} from './TimelineCardElements'

export default function TimelineCard({
  heading,
  level,
  info,
  align,
  openPicker,
  viewSubmission,
  isSubmitted = false,
  isSubmitting = false,
}) {
  const styledFlex = {
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    paddingTop: '0.5rem',
  }

  const containerMargin = {
    marginLeft: align === 'start' && '20rem',
    marginRight: align === 'end' && '20rem',
  }

  const { width } = useWindowSize()

  return (
    <Container id={'timelineCard'} align={'flex-end'} style={containerMargin}>
      <TimelineCardWrapper>
        {heading && (
          <TimelineCardTitle >{heading}</TimelineCardTitle>
        )}
        {info && (
          <TimelineCardInfo >
            <RichText richText={info} />
          </TimelineCardInfo>
        )}
        <FlexCenter style={styledFlex}>
          {level && <TimelineDifficulty>#{level}</TimelineDifficulty>}
          <FlexCenter
            style={{
              gap: 0,
              flexDirection: 'row',
              width: 'max-content',
              justifyContent: 'flex-end',
            }}
          >
            {isSubmitted && (
              <ButtonWrapper onClick={() => viewSubmission()} sq>
                <EyeOutlined />
              </ButtonWrapper>
            )}
            <ButtonWrapper
              onClick={e => openPicker()}
              sm={width > 768}
              sq={width < 768}
              disabled={isSubmitting}
            >
              {isSubmitted ? (
                !(width > 768) ? (
                  <UploadOutlined />
                ) : !isSubmitting ? (
                  'Re-Submit'
                ) : (
                  'Processing...'
                )
              ) : !(width > 768) ? (
                <UploadOutlined />
              ) : !isSubmitting ? (
                'Submit'
              ) : (
                'Processing...'
              )}
            </ButtonWrapper>
          </FlexCenter>
        </FlexCenter>
        <TimelinePoint>
          <span />
        </TimelinePoint>
      </TimelineCardWrapper>
    </Container>
  )
}
