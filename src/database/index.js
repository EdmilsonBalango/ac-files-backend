const MySql = require('mysql')

const conn = MySql.createConnection({
    host: '127.0.0.1',
    port:'3306',
    user: 'root',
    password: '',
    database: 'ac-docs',
})

module.exports = conn
