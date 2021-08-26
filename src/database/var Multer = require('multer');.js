var Multer  = require('multer');
const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb
  }
});


app.post('/upload', multer.single('my file'), (req, res, next) => {
  const { google } = require('googleapis');
  const stream = require('stream');
  const serviceAccount = 'PATH TO SERVICE ACCOUNT';  
  let fileObject = req.file;
  let bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
    const jWTClient = new google.auth.JWT(
      serviceAccount.client_email,
      null,
      serviceAccount.private_key,
      ['<COMMA SEPARATED SCOPES WHICH ARE AUTHORIZED>']
    )
    google.drive({ version: 'v3'})
        .files.create({
            auth: jWTClient,
            media: {
                mimeType: 'application/pdf',
                body: bufferStream
            },
            resource: {
                name: 'test.pdf',
                // if you want to store the file in the root, remove this parents
                parents: ['Drive folder id in which the file needs to be uploaded.']
            },
            fields: 'id',
        }).then(function (resp) {
            console.log(resp,'resp');
        }).catch(function (error) {
            console.log(error);
        })
    res.send('File uploaded');
});