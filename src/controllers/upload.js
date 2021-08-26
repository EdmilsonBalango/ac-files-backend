const express = require('express');
const multer = require('multer')
const router =  express.Router()
const path = require('path');
const { drive } = require('../services/index');
const stream = require('stream')
const conn = require('../database')

router.post('/',multer({
    dest: path.resolve(__dirname, '..','..', 'temp', 'uploads'),
    storage: multer.memoryStorage(),
}).single('file'), async (req, res) =>{
    let fileObject = req.file;
    let bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer)
    
    try {
        const response = await drive.files.create({
        requestBody: {
            name: req.file.originalname,
            mimeType: req.file.mimetype,
        },

        media: {
            mimeType: req.file.mimetype,
            body: bufferStream
        }})

        const data = {
            file_name: req.file.originalname,
            google_id_file: response.data.id,
            id_user: 1,
            id_folder: 1,
            kind: req.file.mimetype
        }
        await conn.query(`INSERT INTO files SET ?`, data, (err,result) => {
            if(err){
                return res.json(err)
            }
            return res.json(result)
        })
    } catch(err) {
        console.log(err)
    }

    
})


module.exports = app => app.use('/upload', router)