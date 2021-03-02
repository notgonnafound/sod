const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "addrole",
    description: "View your inventory",


    async run (client, message, args) {
      
      if(args[0] === "test"){
       let r1 =  db.fetch(`r1_${message.guild.id}`)
       message.channel.send(r1)
       }

      if(args[0] == "1") {
        db.set(`r1_${message.guild.id}`, args[1])
        db.set(`r1_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }
      if(args[0] == "2") {
        db.set(`r2_${message.guild.id}`, args[1])
        db.set(`r2_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }     
      if(args[0] == "3") {
        db.set(`r3_${message.guild.id}`, args[1])
        db.set(`r3_price_${message.guild.id}`, args[2])
        let role = message.guild.roles.cache.find(x => x.id === args[1]);
        message.channel.send(`secsses the role ${role} has been set for ${args[2]} coins`)
      }    
      
    }
}