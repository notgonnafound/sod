const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "clearinv",
    description: "View your inventory",



    async run (client, message, args) {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you dont have permission to do that for administrator only');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        db.delete(`inv_${message.guild.id}_${user.id}`);
        
        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', `${user} invrntory has been cleared`);

        message.channel.send(Embed);
    }
}