const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = 'ld!';
const prefixx = 'LD!';
const prefixxx = 'Ld!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot ora avviato');
    client.user.setActivity("ld!help");
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) && !message.content.startsWith(prefixx) && !message.content.startsWith(prefixxx) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help' || command === 'list' || command === 'info'){
        client.commands.get('list').execute(message, args);
    } 
        //TECHS
    else if(command === 'ada' || command === 'mindfullness' || command === 'all_day_awareness'){
        client.commands.get('ada').execute(message, args);
    } 
    else if(command === 'cild'){
        client.commands.get('cild').execute(message, args);
    }
    else if(command === 'deild'){
        client.commands.get('deild').execute(message, args);
    }
    else if(command === 'fild' || command === 'finger' || command === 'fingers'){
        client.commands.get('fild').execute(message, args);
    }
    else if(command === 'imp' || command === 'impossible_movement' || command === 'impossible' || command === 'movement' || command === 'impossible_movement_practice'){
        client.commands.get('imp').execute(message, args);
    }
    else if(command === 'love_method' || command === 'love' || command === 'daniel_love' || command === 'the_love_method' || command === 'tlm'){
        client.commands.get('lovemethod').execute(message, args);
    }
    else if(command === 'mild'){
        client.commands.get('mild').execute(message, args);
    }
    else if(command === 'rausis'){
        client.commands.get('rausis').execute(message, args);
    }
    else if(command === 'spild'){
        client.commands.get('spild').execute(message, args);
    }
    else if(command === 'ssild' || command === 'senses' || command === 'sense'){
        client.commands.get('ssild').execute(message, args);
    }
    else if(command === 'vild' || command === 'visual'){
        client.commands.get('vild').execute(message, args);
    }
    else if(command === 'wbtb'){
        client.commands.get('wbtb').execute(message, args);
    } 
    else if(command === 'wild'){
        client.commands.get('wild').execute(message, args);
    }
    else if(command === 'wrild' || command === 'write' || command === 'written'){
        client.commands.get('wrild').execute(message, args);
    }

        //OTHERS
        
    else if(command === 'meditation'){
        client.commands.get('meditation').execute(message, args);
    } 
    else if(command === 'best_techniqe' || command === 'best' || command === 'best_tech' || command === 'best_techniques'){
        client.commands.get('besttech').execute(message, args);
    } 
    else if(command === 'binaural_beats' || command === 'bbs' || command === 'bb' || command === 'beats' || command === 'binaural'){
        client.commands.get('binaural').execute(message, args);
    } 
    else if(command === 'dream_journal' || command === 'dream_journaling' || command === 'journal'){
        client.commands.get('dreamjournal').execute(message, args);
    }
    else if(command === 'dream_longer' || command === 'longer' || command === 'stabilize'){
        client.commands.get('dreamlonger').execute(message, args);
    }
    else if(command === 'fall_asleep_fast' || command === 'fallasleepfast' || command === 'fast'){
        client.commands.get('fallasleepfast').execute(message, args);
    }
    else if(command === 'reality_check' || command === 'rc' || command === 'rcs' || command === 'realitycheck' || command === 'realitychecks' || command === 'reality_checks' || command === 'check'){
        client.commands.get('realitycheck').execute(message, args);
    }
    else if(command === 'sc' || command === 'sleepcycle' || command === 'sleep_cycle'){
        client.commands.get('sleepcycle').execute(message, args);
    } 
    else if(command === 'sp' || command === 'sleepparalysis' || command === 'sleep_paralysis'){
        client.commands.get('sleepp').execute(message, args);
    } 


    else
    {
        message.channel.send('Invalid command. Type ld!list for a list of commands.')
    }
});
 

client.login(process.env.token);