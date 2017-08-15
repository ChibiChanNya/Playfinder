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

var performRolls = function(commandContent){
    let num = commandContent.split("d")[0];
    let sides,
        mod;
  if (commandContent.indexOf("+")){
     sides = commandContent.split("d")[1].split("+")[0];
     mod = commandContent.split("d")[1].split("+")[1];
  }
  else if (commandContent.indexOf("-")){
     sides = commandContent.split("d")[1].split("-")[0];
     mod = commandContent.split("d")[1].split("-")[1]; //need to redo parseInt so this is minus
  }
  else {
     sides = commandContent.split("d")[1];
     mod = 0;
  }
  num = parseInt(num);
  sides = parseInt(sides);
  mod = parseInt(mod);
  let rolls = dice(num, sides, mod);
  return "ROLLS: "+ rolls.results + "\n RESULT:" + rolls.total; 
}

//Command List
var commandList = {roll: performRolls};

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
  //console.log(client.channels);
//  client.channels.find("name", "sigil").send('Hai Everyone! ^_^');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  if (message.content.toLowerCase === 'we need...') {
    message.channel.send('CAPTAIN THEORYCRAFT!');
  }
  if (message.content.toLowerCase === 'i got a crit'){
    message.channel.send('Yay! ^_^');
  }
  if (message.content.toLowerCase === 'd20-chan is cute') {
    message.channel.send('Teehee ^-^');
  }
  if (message.content.toLowerCase === '_hugs d20-chan_'){
    message.channel.send('-^_^-');
  }

  if(message.content[0] === prefix){
    message.content.toLowerCase();
    let commandName = message.content.substr(1).split(" ")[0];
    let commandContent = message.content.substr(1).split(" ")[1];
    console.log(commandList); //returns {roll: [function: performRolls]}
    console.log(commandName); //works properly..
    console.log(commandList.commandName); //this is undefined for some reason....
  }
});

// Log our bot in
client.login(token);