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

//Command prefix
var prefix = ".";

//Command List
var command_list = {roll: performRolls};

//dice rolling function
var dice = function(num, sides, mod) {
  let rolls = [];
  function add(a, b) {
      return a + b;
  }
  for (i = 0; i < num; i++) {
      rolls.push(Math.ceil(Math.random() * sides)); 
  }
  return {results: rolls, total: rolls.reduce(add, 0) + mod};
};

var performRolls = function(params){
  //TODO: Get NUM, SIDES and MOD from the params
  let rolls = roll(num, sides, mod);
  return "ROLLS: "+ rolls.results + "\n RESULT:" + rolls.total;
}

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
  //console.log(client.channels);
  client.channels.find("name", "sigil").send('Hai Everyone! ^_^');
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

  if( message.content[0] === prefix){
    ///TODO: SEND PARAMS TO FUNCTION
  }
});

 

/* if (message.content === '~roll')
    //find the first number in the string, pass as num
    //find the second number, pass as side
     message.channel.send(dice(num, side)); */

// Log our bot in
client.login(token);