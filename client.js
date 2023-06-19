const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Game server is connected");
    conn.write("Name: DAR");
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