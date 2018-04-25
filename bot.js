const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
const images = JSON.parse(fs.readFileSync("./pokemonrefs.json", "utf8"));

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
    
    if (message.embeds.length > 0) {
        emb = message.embeds[0];
        if (emb.title.startsWith('A wild')) {
            message.channel.send(emb.image.url);
            name = emb.image.url.split('/').pop(-1).split('.')[0];
            message.channel.send(images[name]);
            realname = images[name];
            message.channel.send("A wild ${realname} has appeared");
        }
    }
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
