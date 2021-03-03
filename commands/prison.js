const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: "jail",
    description: "prison member",


    async run (client, message, args) {

      let presonmem = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      let logs = message.guild.channels.cache.find(x => x.id === "816788429656293446")
      if(!presonmem) return message.channel.send("pls mention a user pls");
      let role = message.guild.roles.cache.find(x => x.id === "816267328869892137");
      let memrole = message.guild.roles.cache.find(x => x.id === "815861530435911691");
      let time = args[1];
      if(!time) return message.channel.send("how mutch time thr preson is gonna be?");
      let reason = args.slice(2).join(" ");
      await(presonmem.roles.add(role));
      presonmem.roles.remove(memrole)
      
      const embed = new Discord.MessagsEmbed()
      .setTitle("new presoner")
      .addField("")
      
      logs.send(`${presonmem} has been presoned for ${ms(ms(time))} for the reason \n ${reason}`);
      
      setTimeout(function(){
        presonmem.roles.remove(role)
        presonmem.roles.add(role)
        message.channel.send(`${presonmem} has been unpresoned`)
      }, ms(time))
      
    }
}