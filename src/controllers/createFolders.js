const express = require('express')
const router = express.Router()
const conn =  require('../database')

router.post('/', async (req, res) => {
    const {mother_bag_id,bag_name} = req.body
    const data ={
        mother_folder: mother_bag_id,
        folder_name: bag_name,
        id_user: 1
    }

    conn.query('INSERT INTO folders SET ?',data, (err, result)=>{
        if(err){
            return res.json(err)
        }
        return res.json(result)
    })
})

module.exports = app => app.use('/createbag', router)