#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

const client = require('./src/client.js')
const conn =  client.connect('10.0.0.71', 50541 );
const {setupInput} = require("./src/input")
//stdin

const handleUserInput = function(input){

    // console.log(input);
    client.moveByKey(conn, input);
}

const stdin = setupInput();
stdin.on("data", handleUserInput);





// Begin game
game.start()


conn.on("connect", ()=>{
    conn.write("Name: ___");
})
// setInterval(
// ()=>{client.move(conn, "up");}, 1000)

