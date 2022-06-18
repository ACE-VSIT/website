import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Heading } from '../../../../styles/sharedStyles'
import TimelineCard from './TimelineCard/TimelineCard'
import { TimelineWrapper } from './TimelineElements'
import Loading from '../../../animations/Loading'
import useDrivePicker from 'react-google-drive-picker'
import axios from 'axios'

export default function Timeline({ timeLine, name }) {
  const [height, setHeight] = useState(0)
  const [submitData, setSubmitData] = useState([])
  const [openPicker, data] = useDrivePicker()
  const wrapper = useRef()

  const getHeight = useCallback(() => {
    const height = wrapper?.current?.offsetHeight
    setHeight(height)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])

  const handleOpenPicker = async () => {
    try {
      const res = await axios.post(
        'https://www.googleapis.com/oauth2/v4/token',
        {
          client_id: process.env.GATSBY_GOOGLE_CLIENT_ID,
          client_secret: process.env.GATSBY_GOOGLE_CLIENT_SECRET,
          refresh_token: process.env.GATSBY_GOOGLE_REFRESH_TOKEN,
          grant_type: 'refresh_token',
        }
      )

      if (res.data.access_token) {
        openPicker({
          clientId: process.env.GATSBY_GOOGLE_CLIENT_ID,
          developerKey: process.env.GATSBY_GOOGLE_API_KEY,
          viewId: 'DOCS',
          token: res.data.access_token,
          showUploadView: true,
          showUploadFolders: false,
          supportDrives: true,
          multiselect: false,
          disableDefaultView: true,
          setParentFolder: process.env.GATSBY_GOOGLE_PARENT_FOLDER_ID,
          // customViews: customViewsArray, // custom view
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (data) {
      const res = data.docs[0]
      setSubmitData({
        downloadUrl: res.downloadUrl,
        id: res.id,
        name: res.name,
        uploadState: res.uploadState,
        url: res.url,
        mimeType: res.mimeType,
      })
    }
  }, [data, setSubmitData])

  useEffect(() => {
    setTimeout(getHeight, 500)
  }, [getHeight])

  return (
    <>
      <Heading style={{ textAlign: 'center', padding: '2rem 0 5rem 0' }}>
        {name}
      </Heading>
      {height !== 0 ? (
        <TimelineWrapper ref={wrapper} height={`${height}px`}>
          {timeLine.map(
            (e, index) =>
              e?.show_question && (
                <TimelineCard
                  key={index}
                  heading={e?.question_name.text}
                  level={e?.difficulty_level}
                  info={e?.question_info.richText}
                  align={index % 2 ? 'start' : 'end'}
                  openPicker={handleOpenPicker}
                />
              )
          )}
        </TimelineWrapper>
      ) : (
        <Loading />
      )}
    </>
  )
}
