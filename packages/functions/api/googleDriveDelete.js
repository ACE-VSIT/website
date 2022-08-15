require('dotenv').config()
import { google } from 'googleapis'

export default (req, res) => {
  if (req.method === 'POST') {
    const { fileId } = req.body

    const CLIENT_ID = process.env.CLIENT_ID
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const REDIRECT_URI = process.env.REDIRECT_URI
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN

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

    const deleteFile = async fileId => {
      try {
        await drive.files.delete({
          fileId,
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
