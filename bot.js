const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
const images = JSON.parse(fs.readFileSync("./pokemonrefs.json", "utf8"));

client.on('ready', () => {
    console.log('I am ready!');
});

var interval;
var intervalid;
var infoid;

client.on('message', message => {
    
    if (message.content === '$ping') {
    	message.reply('pong');
  	}
    
    if (message.content === "$spam") { 
      interval = setInterval (function () {
        if (internalid.indexOf(message.channel) < 0)
            internalid.push(message.channel)
        
        var index;
        for (index = 0; index < intervalid.length; ++index) {
            //console.log(a[index]);
            //message.channel.send("spaming here")
            client.channels.get(intervalid[index]).send('spamming here');
        }
      }, 5 * 1000); 
    }
    
    if (message.content === "$stop") {
        var index = intervalid.indexOf(message.channel);
        if (index > -1) {
          intervalid.splice(index, 1);
        }
        if (intervalid.length < 1)
            clearInterval(interval); 
    }

    if (message.content === "$info") {
        var index = infoid.indexOf(message.channel);
        if (index > -1) {
            infoid.splice(index, 1);
        } else {
            infoid.push(message.channel)
        }
    }

    if (message.embeds.length > 0) {
        emb = message.embeds[0];
        if (emb.title.startsWith('A wild') && infoid.indexOf(message.channel)>-1) {
            //message.channel.send(emb.image.url);
            name = emb.image.url.split('/').pop(-1).split('.')[0];
            //message.channel.send(images[name]);
            realname = images[name];
            if (realname.length >0)
                message.channel.send("A wild " + realname + " has appeared");
        }
    }
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
