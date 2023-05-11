const net = require("net");

// establishes a connection with the game server
const connect = function(ip, port) {
  const conn = net.createConnection({
    host: ip,
    port: port,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// console.log("Connecting ...");
module.exports = {connect:connect}