const bodyParser = require("body-parser");
const epxress = require('express');
const cors = require('cors')

const port = process.env.PORT || 3001
const app = epxress();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/upload')(app)
require('./controllers/getFiles')(app)
require('./controllers/downloadFile')(app)
require('./controllers/createFolders')(app)
require('./controllers/getfolders')(app)
require('./controllers/selfBag')(app)


app.listen(port, ()=> console.log('listening on port: ' + port))