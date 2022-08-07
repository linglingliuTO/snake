const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  
  
  conn.on ("data", (data) => {
  console.log(data)}
  )

  conn.on ("connect", () => {
    console.log("connected");
    conn.write ("Name: LL");
    const moveUP = () => conn.write ("Move: up")
    setInterval(moveUP, 1000)
   
  })



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};




module.exports = connect