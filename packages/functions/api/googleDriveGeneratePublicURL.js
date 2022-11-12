/* eslint-disable no-return-await */
import { google } from 'googleapis'
import allowCors from '../utils/allowCORS'

require('dotenv').config()

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
  const fileId = req.body

  const { CLIENT_ID } = process.env
  const { CLIENT_SECRET } = process.env
  const { REDIRECT_URI } = process.env
  const { REFRESH_TOKEN } = process.env

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  )

  oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
  })

  try {
    await drive.permissions.create({
      fileId: Object.keys(fileId),
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    })
    const result = await drive.files.get({
      fileId: Object.keys(fileId),
      fields: 'webViewLink, webContentLink',
    })
    res.json({
      message: result.data,
      success: true,
    })
  } catch (error) {
    res.json({
      message: 'File generate public url error',
      success: false,
      error,
    })
  }
}

export default allowCors(handler)
