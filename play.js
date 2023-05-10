#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()

const client = require('./src/client.js')

const conn =  client.connect('10.0.0.71', 50541 );

conn.on("connect", ()=>{
    conn.write("Name: ___");
})
// setInterval(
// ()=>{client.move(conn, "up");}, 1000)

