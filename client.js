const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function() {
  // establishes a connection with the game server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // event listener on connect
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