const express = require('express')
const router = express.Router()
const conn = require('../database')

router.post('/', async (req,res)=> {

    const {folder_id} = req.body
    await conn.query(`SELECT * FROM folders WHERE id_folder = ${folder_id}`, (err, result) => {
        if(err){
            return res.json(err)
        }
        return res.json(result)
    })

})

module.exports = app => app.use('/selfbag', router) 