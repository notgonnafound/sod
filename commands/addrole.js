const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "addrole",
    description: "View your inventory",


    async run (client, message, args) {
      

      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you dont have permission to do that for administrator only');
      
      
      if(args[0] == "1") {
        db.set(`r1_${message.guild.id}`, args[1])
        db.set(`r1_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "2") {
        db.set(`r2_${message.guild.id}`, args[1])
        db.set(`r2_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }     
      if(args[0] == "3") {
        db.set(`r3_${message.guild.id}`, args[1])
        db.set(`r3_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      } 
        if(args[0] == "4") {
        db.set(`r4_${message.guild.id}`, args[1])
        db.set(`r4_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "5") {
        db.set(`r5_${message.guild.id}`, args[1])
        db.set(`r5_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "6") {
        db.set(`r6_${message.guild.id}`, args[1])
        db.set(`r6_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "7") {
        db.set(`r7_${message.guild.id}`, args[1])
        db.set(`r7_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "8") {
        db.set(`r8_${message.guild.id}`, args[1])
        db.set(`r8_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "9") {
        db.set(`r9_${message.guild.id}`, args[1])
        db.set(`r9_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "10") {
        db.set(`r10_${message.guild.id}`, args[1])
        db.set(`r10_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        return message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] >= "11") return message.channel.send("only beateen 1 - 10");
    }
}