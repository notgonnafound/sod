const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: "mute",
    description: "mute member",


    async run (client, message, args) {

      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.channel.send("pls mention a user pls");
      let role = message.guild.roles.cache.find(x => x.id === "816267328869892137");
      let time = args[1];
      if(!time) return message.channel.send("how mutch time thr mute is gonna be?");
      
      await(tomute.roles.add(role));
      message.channel.send(`${tomute} has been muted for ${ms(ms(time))}`);
      
      setTimeout(function(){
        tomute.roles.remove(role)
        message.channel.send(`${tomute} has been unmuted`)
      }, ms(time))
      
    }
}