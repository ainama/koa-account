const mysql = require('mysql');

const config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'zhangning',
  database: 'koa',
  port: '3306'
  // connectionLimit: 20
};

const pool = mysql.createPool(config);
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) return reject(err);
      conn.query(sql, values, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
        conn.release();
      })
    })
  })
};

module.exports = query;
