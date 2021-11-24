const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
 
const ytdl = require("ytdl-core")

const prefix = 'm!';
const prefixx = 'M!';
 
var servers = {}; 

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot ora avviato');
    client.user.setActivity("m!p");
});
 
client.on('message', message =>{


    if(!message.content.startsWith(prefix) && !message.content.startsWith(prefixx) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'play':
            function play(connection, message){
                var server = servers[message.guild.id];
                
                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();

                server.dispatcher.on("finish", function(){
                    message.channel.send("canzone finita");
                    if(server.queue[0]){
                        play(connection, message);
                    }else{
                        connection.disconnect();
                    }
                })



            }



            if(!args[1]){
                message.channel.send("Il mio panflute ha bisogno di un link... :C");
                return;
            }
            if(!args[1].startsWith("https")){
                message.channel.send("Il mio panflute accetta solo link.. :/");
                return;
            }
            if(!message.member.voice.channel){
                message.channel.send("Il mio panflute serve solo le persone nei canali vocali.. T_T");
                return;
            }
            if(!servers[message.guild.id]) servers[message.guild.id]= {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);


            if(!message.guild.voiceConnection) message.member.voice.channel.join().then(function(connection){
                message.channel.send("Arrivo a suonare il mio magico flauto")
                play(connection, message);
            })


        break;

        case 's':
            var server = servers[message.guild.id];
            if(server.dispatcher) server.dispatcher.end();

        break;
    }
    
    
});
 

client.login(process.env.token);