const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('ms');
const { default_prefix } = require('../config.json')
module.exports = {
    name: "mute",
    description: "mute member",


    async run (client, message, args) {
    let prefix = await db.get(`prefix_${message.guild.id}`);
    if (prefix === null) prefix = default_prefix;
      
      let muterole = db.fetch(`muterole_${message.guild.id}`)
      if (!muterole) return message.channel.send(`pls give me the id of the muted role by \n ${default_prefix}mute roleset [role-id]`)
      
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.channel.send("pls mention a user pls");
      let role = message.guild.roles.cache.find(x => x.id === "816267328869892137");
      let time = args[1];
      if(!time) return message.channel.send("how mutch time thr mute is gonna be?");
      let reason = args.slice(2).join(" ");
      await(tomute.roles.add(role));
      message.channel.send(`${tomute} has been muted for ${ms(ms(time))} for the reason \n ${reason}`);
      
      setTimeout(function(){
        tomute.roles.remove(role)
        message.channel.send(`${tomute} has been unmuted`)
      }, ms(time))
      
    }
}