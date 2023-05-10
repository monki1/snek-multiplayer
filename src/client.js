const net = require("net");

// establishes a connection with the game server
const connect = function (ip, port) {
  const conn = net.createConnection({
    host: ip,
    port: port,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

const actions = ["up", "down", "left", "right"]

const messagefy = function(action){return "Move: "+action}
const move = (conn, action)=>{
    conn.write(messagefy(action));
}


// console.log("Connecting ...");
module.exports = {connect:connect, move: move}