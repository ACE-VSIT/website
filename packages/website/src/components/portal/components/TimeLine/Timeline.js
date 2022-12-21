import { toSnakeCase } from '@ace/common'
import axios from 'axios'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import useDrivePicker from 'react-google-drive-picker'
import { AuthContext } from '../../../../context/auth/AuthContext'
import { FirebaseContext } from '../../../../context/FirebaseContext'
import {
  deleteFileFromStorage,
  generatePublicURL,
  saveSubmittionData
} from '../../../../firebase'
import { Heading } from '../../../../styles/sharedStyles'
import Loading from '../../../animations/Loading'
import TimelineCard from './TimelineCard/TimelineCard'
import { TimelineWrapper } from './TimelineElements'

export default function Timeline({ timeLine, name }) {
  const [height, setHeight] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState([])
  const [isSubmitting, setIsSubmitting] = useState([])
  const [liveQuestionTimeline, setLiveQuestionTimeline] = useState([])
  const [openPicker] = useDrivePicker()
  const wrapper = useRef()
  const { user } = useContext(AuthContext)
  const { getSubmissionDetails, submissions } = useContext(FirebaseContext)

  const getHeight = useCallback(() => {
    const height = wrapper?.current?.offsetHeight
    setHeight(height)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])

  const handleOpenPicker = async (
    questionType,
    deleteFile = false,
    fileId = ''
  ) => {
    try {
      setIsSubmitting(prev => [...prev, toSnakeCase(questionType)])
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
          callbackFunction: async data => {
            if (data.action === 'cancel') {
              console.log('User clicked cancel/close button')
              setIsSubmitting(prev =>
                prev.filter(item => item !== toSnakeCase(questionType))
              )
            }
            if (data.docs) {
              if (deleteFile && fileId) {
                await deleteFileFromStorage(fileId)
              }
              await generatePublicURL(data.docs[0].id)
              await saveSubmittionData(data.docs[0], questionType, user.email)
              setIsSubmitted(prev => [...prev, toSnakeCase(questionType)])
              await getSubmissionDetails(user.email)
              setIsSubmitting(prev =>
                prev.filter(item => item !== toSnakeCase(questionType))
              )
            }
          },
          // customViews: customViewsArray, // custom view
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const viewSubmission = questionType => {
    if (submissions) {
      Object.keys(submissions).forEach(key => {
        if (key === questionType) {
          window.open(submissions[key]?.url)
        }
      })
    }
  }

  const getExistingSubmission = useCallback(async () => {
    if (user?.email) {
      const res = await getSubmissionDetails(user.email)
      if (typeof res === 'object') {
        Object.keys(res).forEach(key => {
          setIsSubmitted(prev => [...prev, key])
        })
      }
    }
  }, [user?.email, getSubmissionDetails])

  useEffect(() => getExistingSubmission(), [getExistingSubmission])

  useEffect(() => {
    setLiveQuestionTimeline(timeLine.filter((e) => e?.show_question))
  }, [timeLine])

  useEffect(() => {
    setTimeout(getHeight, 100)
  }, [getHeight])

  return (
    <>
      <Heading style={{ textAlign: 'center', padding: '2rem 0 5rem 0' }}>
        {name}
      </Heading>
      {height !== 0 ? (
        <TimelineWrapper ref={wrapper} height={`${height}px`}>
          {liveQuestionTimeline?.map(
            (e, index) =>
              e?.show_question && (
                <TimelineCard
                  level={e?.difficulty_level}
                  heading={e?.question_name.text}
                  info={e?.question_info.richText}
                  isSubmitting={isSubmitting.includes(
                    toSnakeCase(e?.question_name?.text)
                  )}
                  align={index % 2 ? 'start' : 'end'}
                  key={`${e?.question_name.text}-${index}`}
                  openPicker={async () =>
                    await handleOpenPicker(
                      // Pass QuestionName
                      e?.question_name.text,
                      // Check if its firstSubmit or reSubmit
                      isSubmitted.includes(toSnakeCase(e?.question_name?.text)),
                      // If reSubmit, pass fileId
                      isSubmitted.includes(toSnakeCase(e?.question_name?.text))
                        ? submissions[toSnakeCase(e?.question_name?.text)].id
                        : false
                    )
                  }
                  viewSubmission={() =>
                    viewSubmission(toSnakeCase(e?.question_name?.text))
                  }
                  isSubmitted={isSubmitted.includes(
                    toSnakeCase(e?.question_name?.text)
                  )}
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
