var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: process.env.JAWSDB_URL,
    user: 'k7xla01xphzti210',
    password: process.env.mysqlpw,
    database: 'ovxat78p3u9nlobp'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
