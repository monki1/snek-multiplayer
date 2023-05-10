let connection;
const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
};

const keyMap = {"w":"up", "s":"down", "a":"left", "d":"right"}

const messagefy = function(action){return "Move: "+action}
const move = (action)=>{
    connection.write(messagefy(action));
}
const moveByKey = function(key){
    // console.log(key, keyMap[key])
    move(keyMap[key]);
}






module.exports = {setupInput, moveByKey}