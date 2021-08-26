const express = require('express')
const router = express.Router()
const conn = require('../database')

router.post('/', async (req, res) => {

    const {folder_id} = req.body
    await conn.query(`SELECT * FROM files WHERE id_user = ${folder_id}`, (err, result) =>{
        if(err){
            return res.json(err)
        }else{
            return res.json(result)
        }
    })
})

module.exports = app => app.use('/getfiles', router)

