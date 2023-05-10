
const keyMap = {"w":"up", "s":"down", "a":"left", "d":"right"}
const messageKey = "\""
const moveMessage = function(action){return "Move: "+action}
const move = (action)=>{
    connection.write(moveMessage(action));
}
const moveByKey = function(key){
    move(keyMap[key]);
}
let message = ""
const typeMessage = function(key){
    // if(key = messageKey){

    // }
    message += key
}
const sayMessage = function(msg){
    connection.write("Say: "+msg);
}
const sendMessage = function(){
    sayMessage(message);
    message = ""
}
const inputMode = {
    say: typeMessage,
    game: moveByKey
}
let connection;
let mode = inputMode.game;
const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
};




const takeInput = function(key){
    console.log(key)
    if(key == messageKey){
        if(mode === inputMode.game){
            mode = inputMode.say
        }else{
            console.log(message);
            sendMessage();
            
            mode = inputMode.game;
        }
    }else{

    mode(key);

    }
    
}







module.exports = {setupInput, takeInput}