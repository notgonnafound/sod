const Discord = require('discord.js');

module.exports = {
    name: "shop",
    description: "View the shop",

    async run (client, message, args) {
  
      
        let r1 = message.guild.roles.cache.find(x => x.name === "Muted");

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`1 - 🌈 - 500 coins \n 2 - 🌬 - 250 coins`)
        .setTimestamp();

        message.channel.send(embed);
    }
}