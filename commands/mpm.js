const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: "mpm",
    description: "View the shop",

    async run (client, message, args) {
  
          db.set(`mpm_${message.guild.id}`, args[0])

        const embed = new Discord.MessageEmbed()
        .setTitle('money per message')
        .setDescription(`money per message change to ${args[0]}`)
        .setTimestamp();

        message.channel.send(embed);
    }
}