const express=require('express');
const app=express();
const port=3000;

const mariadb=require('mariadb');
const pool = mariadb.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'sample',
	port:3306,
	connectionLimit:5
});

// expose an endpoint "people"
app.get('/company', async (req, res) => {
    let conn;
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = "select * from company";

        // execute the query and set the result to a new variable
        var rows = await conn.query(query);

        // return the results
        //res.send(rows);
        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
    //res.json(rows);
});

app.get('/agents', async (req, res) => {
    let conn;
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = "select * from agents";

        // execute the query and set the result to a new variable
        var rows = await conn.query(query);

        // return the results
        //res.send(rows);
        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

app.get('/customer', async (req, res) => {
    let conn;
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = "select * from customer";

        // execute the query and set the result to a new variable
        var rows = await conn.query(query);

        // return the results
        //res.send(rows);
        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

app.get('/daysorder', async (req, res) => {
    let conn;
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = "select * from daysorder";

        // execute the query and set the result to a new variable
        var rows = await conn.query(query);

        // return the results
        //res.send(rows);
        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});


app.get('/orders', async (req, res) => {
    let conn;
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = "select * from orders";

        // execute the query and set the result to a new variable
        var rows = await conn.query(query);

        // return the results
        //res.send(rows);
        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

app.get('/foods', async (req, res) => {
    let conn;
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = "select * from foods";

        // execute the query and set the result to a new variable
        var rows = await conn.query(query);

        // return the results
        //res.send(rows);
        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});


//app.get('/resource',(req,res)=>{
//connect to database
//perform requrest , SQL
//define header
//res.json(rows);
//res.send('Hello');
//});

app.listen(port, () => console.log(`Listening on port ${port}`));

