const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "clearinv",
    description: "View your inventory",


    async run (client, message, args) {
      if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('go fuck your self you dont have prem hahaha');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        db.delete(user.id);
        
        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', `${user} invrntory has been cleared`);

        message.channel.send(Embed);
    }
}