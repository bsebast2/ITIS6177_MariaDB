const express = require('express')
const app = express()
const port = 3000

const mariadb=require('mariadb');
const pool = mariadb.createPool({
        host:'localhost',
        user:'root',
        password:'root',
        database:'sample',
        port:3306,
        connectionLimit:5
});

app.listen(port, () => console.log(`Listening on port ${port}`));
