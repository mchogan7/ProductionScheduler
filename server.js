const dbInfo = require('./databaseInfo.js')
var app = require('express')();
var http = require('http').Server(app);
const port = process.env.PORT || 4000;
const mysql      = require('mysql');
const connection = mysql.createConnection(dbInfo);
var io = require('socket.io')(http);




app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function (socket) {

    console.log('a client connected');

connection.query('SELECT * FROM users;', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
      socket.emit('showrows', results);
    })

 socket.on('update', function(update){
    console.log(update);
    connection.query('UPDATE users SET password = ? WHERE UserID = 1', [update], function (error, results, fields) {

  if (error) throw error;
  // ... 
});

connection.query('SELECT * FROM users;', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
      io.local.emit('showrows', results);
    })


  });




});

function update(){

}




 


// app.listen(port, function () {
//   console.log('Example app listening on port ' + port)
// })