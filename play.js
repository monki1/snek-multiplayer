#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const {connect} = require('./src/client')
const {setupInput, takeInput} = require("./src/input")


const game = new Game(new UserInterface(), new RemoteInterface())
const conn = connect('10.0.0.71', 50541 );

const stdin = setupInput(conn);
const handleUserInput = function(input){

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

