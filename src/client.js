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

const keyMap = {"w":"up", "s":"down", "a":"left", "d":"right"}

const messagefy = function(action){return "Move: "+action}
const move = (conn, action)=>{
    conn.write(messagefy(action));
}
const moveByKey = function(conn, key){
    console.log(key, keyMap[key])
    move(conn, keyMap[key]);
}


// console.log("Connecting ...");
module.exports = {connect:connect, move: move, moveByKey}