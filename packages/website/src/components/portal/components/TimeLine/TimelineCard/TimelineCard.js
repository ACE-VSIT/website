import React from 'react'
import { FlexCenter } from '../../../../../styles/sharedStyles'
import { ButtonWrapper } from '../../Google/LoginElements'
import RichText from '../../../../rich-text'
import {
  Container,
  TimelineCardInfo,
  TimelineCardTitle,
  TimelineCardWrapper,
  TimelinePoint,
  TimelineDifficulty
} from './TimelineCardElements'
import { EyeOutlined, UploadOutlined } from '@ant-design/icons'
import useWindowSize from '../../../../../hooks/useWindowSize'

export default function TimelineCard ({
  heading,
  level,
  info,
  align,
  openPicker,
  viewSubmission,
  isSubmitted = false
}) {
  const styledFlex = {
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    paddingTop: '0.5rem'
  }

  const containerMargin = {
    marginLeft: align === 'start' && '20rem',
    marginRight: align === 'end' && '20rem'
  }

  const { width } = useWindowSize()

  return (
    <Container id={'timelineCard'} align={'flex-end'} style={containerMargin}>
      <TimelineCardWrapper>
        {heading && (
          <TimelineCardTitle align={align}>{heading}</TimelineCardTitle>
        )}
        {info && (
          <TimelineCardInfo align={align}>
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
              justifyContent: 'flex-end'
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
            >
              {isSubmitted ? (
                !(width > 768) ? (
                  <UploadOutlined />
                ) : (
                  'Re-Submit'
                )
              ) : !(width > 768) ? (
                <UploadOutlined />
              ) : (
                'Submit'
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
