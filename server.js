const express = require('express')
const dbInfo = require('./databaseInfo.js')
const app = express()
const port = process.env.PORT || 4000;
const mysql      = require('mysql');
const connection = mysql.createConnection(dbInfo);
var io = require('socket.io')(http);



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


 
connection.connect();
 
connection.query('SELECT * FROM users;', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})