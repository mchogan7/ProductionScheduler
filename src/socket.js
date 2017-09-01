import io from 'socket.io-client';
// let socket = io(`http://localhost:3100`)
// let socketMethods = {
    
    initialLoad: function() {
      socket.on('getInitial', function(rows) {
       return rows
      });
    },

    update: function(data) {
        socket.emit('update', data);
    }
}



module.exports = socketMethods