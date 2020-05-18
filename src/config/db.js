const { Pool } = require('pg')

module.exports = new Pool({
    user: 'yourusername',
    password: 'yourpassword',
    host: 'localhost',
    port: '5432',
    database: 'databasename'
})
