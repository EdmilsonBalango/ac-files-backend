const { google } = require("googleapis");
const path = require('path')
const fs = require('fs')

const CLIENT_ID = '692130825628-n68cta28g1gcsup4btrvaqq55sl0lgvr.apps.googleusercontent.com'
const CLIENT_SECRET = 'E0TU2Q_K1II6ZwLVSXKxepMI'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04v1Y1dsEx5OtCgYIARAAGAQSNwF-L9IrvNw94LEgPKqa8qmKrN3q_Al6_iKhx8TZzgzAznDSao74YuxDnHURoS7hNwb_n2B_7tA'

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