const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  
  conn.on ("data", (data) => {
  console.log(data)}
  )

  conn.on ("connect", () => {
    console.log("connected");
    conn.write ("Name: LL");
    
   
  })





  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};




module.exports = {connect}