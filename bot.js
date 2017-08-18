require('dotenv').config({path: __dirname + '/token.env'});
/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/
// Import the discord.js module
const Discord = require('discord.js');
// Import the command functions
const Commands = require('./functions.js');
// Import the reaction functions
const Reaction = require('./reaction.js');
// Create an instance of a Discord client
const client = new Discord.Client();
// The token of your bot - https://discordapp.com/developers/applications/me
const token = process.env.TOKEN;
//Command prefix
const prefix = ".";
//Command List
const commandList = {roll: Commands.performRolls};

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
  //console.log(client.channels);
//  client.channels.find("name", "sigil").send('Hai Everyone! ^_^');
});

// Create an event listener for messages
client.on('message', message => {
  //If it's a special function with prefix
  if(message.content[0] === prefix){
    message.content.toLowerCase();
    let commandName = message.content.substr(1).split(" ")[0];
    let commandContent = message.content.substr(1).split(" ")[1];
    message.channel.send(commandList[commandName](commandContent)); 
  } else {
    //It's a text reaction
    message.channel.send(Reaction.reaction(message.content));
  }
});

// Log our bot in
client.login(token);