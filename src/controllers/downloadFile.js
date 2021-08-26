const express = require('express');
const { drive } = require('../services/index');
const router = express.Router()
const fs = require('fs');
const path = require('path');
const os = require('os')

router.post('/', async (req, res) =>{
    var {google_file_id, kind} = req.body
    const filePath = path.join(os.tmpdir())
    var dest = fs.createWriteStream('../../temp/download.pdf')
    drive.files.export({
        fileId: google_file_id,
        mimeType: kind
    }, {responseType: 'stream'})
    .on('end', function (){
        return res.json('Done')
    })
    .on('error', function(err){
        return res.json('error during download, ', err)
    })  
        .pipe(dest);

})

module.exports = app => app.use('/downloadfile', router)
