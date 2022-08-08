

let connection;

const setupInput = function (conn) {

  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
 

 

    return stdin;

  
};

const handleUserInput = function (key) {
let direction = ""

  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'w') {
    
    direction ="Move: up";
    connection.write(direction)
    
  }
  if (key === 's') {
    direction ="Move: down";
    connection.write(direction)
  }

  if (key === 'a') {
    direction ="Move: left";
    connection.write(direction)
  }
  if (key === 'd') {
    direction ="Move: right";
    connection.write(direction)
  }

  if (key === 'y') {
    connection.write("Say: Snakes are cool!")
  }
}



module.exports = { setupInput } 