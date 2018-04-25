const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
let images = JSON.parse(fs.readFileSync("./pokemonrefs.json", "utf8"));

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
    
    if (message.embeds.length) {
        emb = message.embeds[0]
        if title.startsWith('A wild') {
            name = self.pokeref[emb.image.url.split('/')[-1].split('.')[0]]
            realname = images[name];
            message.channel.send("A wild ${realname} has spawned");
        }
    }
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
