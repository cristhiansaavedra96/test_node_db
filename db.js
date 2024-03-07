const mysql = require('mysql2/promise');

const mySqlURL = 'mysql://root:a3553fG6EagA5b6fD6613B2d3adaecGc@viaduct.proxy.rlwy.net:11072/railway'

const initiateDb = async () => {
    try {
        const db = await mysql.createConnection(mySqlURL);
        const [results, fields] = await db.query(
            'SELECT * FROM `permisos`'
        );
        console.log(results)
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database: ', err);
    }
}

module.exports = initiateDb;