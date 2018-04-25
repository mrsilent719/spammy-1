const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var interval;

client.on('message', message => {
    if (message.content === '$ping') {
    	message.reply('pong');
  	}
    if (message.content === "$loop") { 
      interval = setInterval (function () {
        message.channel.send("spaming here")
      }, 5 * 1000); 
    }
    if (message.content === "$stop") { 
      clearInterval(interval); 
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
