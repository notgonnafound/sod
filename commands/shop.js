const Discord = require('discord.js');

module.exports = {
    name: "shop",
    description: "View the shop",

    async run (client, message, args) {
  
      
        let r1 = message.guild.roles.cache.find(x => x.id === "815428440433360899");
        let r2 = message.guild.roles.cache.find(x => x.id === "815428498264031263");

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`1 - ${r1} - 500 coins \n2 - ${r2} - 250 coins`)
        .setTimestamp();

        message.channel.send(embed);
    }
}