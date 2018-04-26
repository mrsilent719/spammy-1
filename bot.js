const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
const images = JSON.parse(fs.readFileSync("./pokemonrefs.json", "utf8"));

client.on('ready', () => {
    console.log('I am ready!');
    
    interval = setInterval (function () {
        var index;
        for (index = 0; index < spamid.length; ++index) {
            client.channels.get(spamid[index]).send('spamming here');
        }
    }, 5 * 1000); 
});

var interval;
var spamid;
var infoid;

client.on('message', message => {
    
    if (message.content === '$ping') {
    	message.reply('pong');
  	}
    
    if (message.content === "$spam") { 
        if (spamid.indexOf(message.channel) < 0)
            spamid.push(message.channel)
        
        message.channel.send("spam enabled");
    }
    
    if (message.content === "$stop") {
        var index = spamid.indexOf(message.channel);
        if (index > -1) {
          spamid.splice(index, 1);
        }
        message.channel.send("spam disabled");
        
        if (spamid.length < 1)
            clearInterval(interval); 
    }
    
    if (message.content === "$spamchannels") { 
        message.channel.send("spam channels: " + spamid.join(", "));
    }

    if (message.content === "$info") {
        var index = infoid.indexOf(message.channel);
        if (index > -1) {
            infoid.splice(index, 1);
            message.channel.send("spawns info disabled");
        } else {
            infoid.push(message.channel)
            message.channel.send("spawns info enabled");
        }
    }

    if (message.content === "$infochannels") { 
        message.channel.send("spawns info channels: " + infoid.join(", "));
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
