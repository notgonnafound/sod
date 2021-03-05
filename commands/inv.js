const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inventory",
    description: "View your inventory",


    async run (client, message, args) {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) user = message.author
        let items = await db.fetch(`inv_${message.guild.id}_${user.id}`);
        if(items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', items)

        message.channel.send(Embed);
    }
}