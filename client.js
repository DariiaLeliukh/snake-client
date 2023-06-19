const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //recieve data from server
  conn.on("data", (data) => {
    console.log("Message from game server: ", data);
  });

  return conn;
};

module.exports = connect;