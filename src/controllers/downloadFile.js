const express = require('express');
const { drive } = require('../services/index');
const router = express.Router()
const fs = require('fs');
const path = require('path');
const os = require('os')

router.post('/', async (req, res) =>{
    var {google_file_id, kind} = req.body
    drive.files.get({fileId: google_file_id, fields: '*'}, (err, result) =>{
        if(err){
            return res.json({Error: err})
        }
        return res.json(result)
    })
})
module.exports = app => app.use('/downloadfile', router)
