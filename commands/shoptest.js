const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "shoptest",
    description: "View the shop",

    async run (client, message, args) {
  
        let role1 = db.fetch(`r1_${message.guild.id}`)
        let role1price = db.fetch(`r1_price_${message.guild.id}`)
        let role2 = db.fetch(`r2_${message.guild.id}`)
        let role2price = db.fetch(`r2_price_${message.guild.id}`)      
        
        
        let r1 = message.guild.roles.cache.find(x => x.id === role1);
        let r2 = message.guild.roles.cache.find(x => x.id === role2);

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`1 - ${r1} - ${role1price} coins \n2 - ${r2} - ${role2price} coins`)
        .setTimestamp();

        message.channel.send(embed);
    }
}