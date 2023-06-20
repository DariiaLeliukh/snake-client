// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

/*
  Exit the game if the Ctrl+C is pressed
*/
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  // Move up
  if (key === 'w') {
    connection.write("Move: up");
  }

  //Move left
  if (key === 'a') {
    connection.write("Move: left");
  }

  //Move down
  if (key === 's') {
    connection.write("Move: down");
  }

  //Move right
  if (key === 'd') {
    connection.write("Move: right");
  }

  //when k is pressed
  if (key === 'k') {
    connection.write("Say: looks like a bad move");
  }

  //when l is pressed
  if (key === 'l') {
    connection.write("Say: l stands for ... loser");
  }
};

module.exports = setupInput;