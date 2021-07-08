const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '+';

client.once('ready', () => {
    console.log('Bot Is Online')
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!')
    }

    if(command === 'sinfo'){
        message.channel.send('The Server Is Made By Parth Karan For Bot Testing')
    }

    if(command === 'help')
    message.channel.send('The Available Commands Are 1.+sinfo  2.+ping')

})

client.login('ODYyNjU4MjI2NDk5NDg1NzE2.YObjFA.Hbc3ZHL_yuqUUfnIUaflxeKXklI')