const express = require('express');
const app = express()
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3253',
    database: 'project4'
})

app.use(cors());


app.use(express.static(path.join(__dirname, "../client/build")));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
})

app.get('/api/get', (req, res) => {
    const sqlInsert = "SELECT * FROM company;"
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.listen(port, () => {
    console.log('Example app listening at on')
})