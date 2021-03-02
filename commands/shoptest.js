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
        let role3 = db.fetch(`r3_${message.guild.id}`)
        let role3price = db.fetch(`r3_price_${message.guild.id}`)         
        
        
        let r1 = message.guild.roles.cache.find(x => x.id === role1);
        let r2 = message.guild.roles.cache.find(x => x.id === role2);
        let r3 = message.guild.roles.cache.find(x => x.id === role3);
      
        if(!r1) return message.channel.send("no shop on this server")
        let pro1 = `1 - ${r1} - ${role1price} coins`
        let pro2 = `2 - ${r2} - ${role2price} coins`
        let pro3 = `2 - ${r3} - ${role3price} coins`
        if(!r2) pro2 = "2 - nothing"
        if(!r3) pro3 = "3 - nothing"
      
        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`${pro1} \n${pro2} \n${pro3}`)
        .setTimestamp();

        message.channel.send(embed);
    }
}