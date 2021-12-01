const mysql = require('mysql')

// 数据库信息
let connection = mysql.createPool({
    host: 'localhost',  
    user: 'root',
    password: 'hzk123',
    database: 'system'
})

function query(sql, callback) {
  connection.getConnection(function(err, connection) {
    connection.query(sql, function(err, rows) {
        callback(err, rows);
        connection.release();
    })
  })
}

exports.query = query;
