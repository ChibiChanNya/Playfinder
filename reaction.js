module.exports = {
  reaction: function () {
      switch (commandContent) {
    
        case 'ping':
        message.channel.send('pong');
        break;

        case 'we need...':
        message.channel.send('CAPTAIN THEORYCRAFT!');
        break;
    
        case 'i got a crit':
        message.channel.send('Yay! ^_^');
        break;

        case 'd20-chan is cute':
        message.channel.send('Teehee ^-^');
        break;
    
        case '_hugs d20-chan_':
        message.channel.send('-^_^-');
        break;

        default:
        return " ";

  }
}};