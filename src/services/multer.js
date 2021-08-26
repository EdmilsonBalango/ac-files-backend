const multer = require("multer");
const path =  require('path')
const crypto = require('crypto');
const { file } = require("googleapis/build/src/apis/file");

module.exports ={ 
    dest: path.resolve(__dirname, '..','..', 'temp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null,path.resolve(__dirname, '..','..', 'temp', 'uploads'))
        },
        filename: (req, file, cb) => {
            cb(null, file.filename)
        } ,
    }),
 };