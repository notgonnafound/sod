const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inv",
    description: "View your inventory",


    async run (client, message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        db.delete(user.id);
        
        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', `${user} invrntory has been cleared`);

        message.channel.send(Embed);
    }
}