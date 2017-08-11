require('dotenv').config({path:__dirname+'/token.env'});
/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = process.env.TOKEN;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
 // message.channel.send("Hai!"); Think this would be cute to add...
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  if (message.content === 'We need..') {
    message.channel.send('CAPTAIN THEORYCRAFT!');
  }
  if (message.content === 'I got a crit'){
    message.channel.send('Yay! ^_^');
  }
  if (message.content === 'D20-Chan is cute') {
    message.channel.send('Teehee ^-^');
  }
  if (message.content === '_hugs D20-Chan_'){
    message.channel.send('-^_^-');
  }
});

// Log our bot in
client.login(token);