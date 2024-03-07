const mysql = require('mysql2/promise');

const mySqlURL = 'mysql://root:a3553fG6EagA5b6fD6613B2d3adaecGc@viaduct.proxy.rlwy.net:11072/railway'
//const mySqlURL = 'mysql://root:a3553fG6EagA5b6fD6613B2d3adaecGc@mysql.railway.internal:3306/railway'

const initiateDb = async () => {
    try {
        const db = await mysql.createConnection(mySqlURL);
        console.time('Connected to database')
        const [results, fields] = await db.query(
            'SELECT * FROM `permisos`'
        );
        console.log(results)
        console.timeEnd('Connected to database');
    } catch (err) {
        console.error('Error connecting to database: ', err);
    }
}

module.exports = initiateDb;