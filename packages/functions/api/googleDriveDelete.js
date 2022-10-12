/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
import { google } from 'googleapis'

require('dotenv').config()

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { fileId } = JSON.parse(req.body)

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

    const deleteFile = async driveFileId => {
      try {
        await drive.files.delete({
          driveFileId,
        })
        res.json({
          message: 'File deleted',
          success: true,
        })
      } catch (error) {
        res.json({
          message: 'File deleted error',
          success: false,
          error,
        })
      }
    }

    deleteFile(fileId)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

export default allowCors(handler)
