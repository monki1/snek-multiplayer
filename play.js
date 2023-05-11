#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const {connect} = require('./src/client/client')
const {setupInput, takeInput} = require("./src/client/input")
const {IP, PORT} = require("./src/constants")


const game = new Game(new UserInterface(), new RemoteInterface())
const conn = connect(IP, PORT);

const stdin = setupInput(conn);
const handleUserInput = function(input) {
  takeInput(input);
}


stdin.on("data", handleUserInput);





// Begin game
game.start()


// conn.on("connect", ()=>{
//     conn.write("Name: ___");
// })
// setInterval(
// ()=>{client.move(conn, "up");}, 1000)

