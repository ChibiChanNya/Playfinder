module.exports = {
  reaction: function () {
      switch (commandContent) {
    
        case 'ping':
        return 'pong';
        break;

        case 'we need...':
        return 'CAPTAIN THEORYCRAFT!';
        break;
    
        case 'i got a crit':
        return 'Yay! ^_^';
        break;

        case 'd20-chan is cute':
        return 'Teehee ^-^';
        break;
    
        case '_hugs d20-chan_':
        return '-^_^-';
        break;

        default:
        return " ";

  }
}};