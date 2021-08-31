const { google } = require("googleapis");
const path = require('path')
const fs = require('fs')

const CLIENT_ID = '692130825628-n68cta28g1gcsup4btrvaqq55sl0lgvr.apps.googleusercontent.com'
const CLIENT_SECRET = 'E0TU2Q_K1II6ZwLVSXKxepMI'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04OXU9fY53u6gCgYIARAAGAQSNwF-L9IrHQ3ecaO6IGCab-yb5FzybI4j_CTklyHfhkcwGsK0urRmtRBTtFUOv5xnsu3VRYDmTe8'

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
)

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})


module.exports={drive}