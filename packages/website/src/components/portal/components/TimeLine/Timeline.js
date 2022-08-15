import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Heading } from '../../../../styles/sharedStyles'
import TimelineCard from './TimelineCard/TimelineCard'
import { TimelineWrapper } from './TimelineElements'
import Loading from '../../../animations/Loading'
import useDrivePicker from 'react-google-drive-picker'
import axios from 'axios'
import { deleteFileFromStorage, saveSubmittionData } from '../../../../firebase'
import { AuthContext } from '../../../../context/auth/AuthContext'
import { FirebaseContext } from '../../../../context/FirebaseContext'

export default function Timeline({ timeLine, name }) {
  const [height, setHeight] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState([])
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
          callbackFunction: data => {
            if (data.action === 'cancel') {
              console.log('User clicked cancel/close button')
            }
            if (data.docs) {
              deleteFile && fileId && deleteFileFromStorage(fileId)
              saveSubmittionData(data.docs[0], questionType, user.email)
              setIsSubmitted(prev => [
                ...prev,
                questionType.replace(/\s+/g, '-').toLowerCase(),
              ])
              getSubmissionDetails(user.email)
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
    const res = await getSubmissionDetails(user.email)
    Object.keys(res).forEach(key => {
      setIsSubmitted(prev => [...prev, key])
    })
  }, [user?.email, getSubmissionDetails])

  useEffect(() => getExistingSubmission(), [getExistingSubmission])

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
                  level={e?.difficulty_level}
                  heading={e?.question_name.text}
                  info={e?.question_info.richText}
                  align={index % 2 ? 'start' : 'end'}
                  key={`${e?.question_name.text}-${index}`}
                  openPicker={() =>
                    handleOpenPicker(
                      // Pass QuestionName
                      e?.question_name.text,
                      // Check if its firstSubmit or reSubmit
                      isSubmitted.includes(
                        e?.question_name?.text
                          ?.replace(/\s+/g, '-')
                          .toLowerCase()
                      ),
                      // If reSubmit, pass fileId
                      isSubmitted.includes(
                        e?.question_name?.text
                          ?.replace(/\s+/g, '-')
                          .toLowerCase()
                      )
                        ? submissions[
                            e?.question_name?.text
                              ?.replace(/\s+/g, '-')
                              .toLowerCase()
                          ].id
                        : ''
                    )
                  }
                  viewSubmission={() =>
                    viewSubmission(
                      e?.question_name?.text?.replace(/\s+/g, '-').toLowerCase()
                    )
                  }
                  isSubmitted={isSubmitted.includes(
                    e?.question_name?.text?.replace(/\s+/g, '-').toLowerCase()
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
