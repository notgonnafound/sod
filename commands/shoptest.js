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
        let role4 = db.fetch(`r4_${message.guild.id}`)
        let role4price = db.fetch(`r4_price_${message.guild.id}`)
        let role5 = db.fetch(`r5_${message.guild.id}`)
        let role5price = db.fetch(`r5_price_${message.guild.id}`)      
        let role6 = db.fetch(`r6_${message.guild.id}`)
        let role6price = db.fetch(`r6_price_${message.guild.id}`)
        let role7 = db.fetch(`r7_${message.guild.id}`)
        let role7price = db.fetch(`r7_price_${message.guild.id}`)
        let role8 = db.fetch(`r8_${message.guild.id}`)
        let role8price = db.fetch(`r8_price_${message.guild.id}`)      
        let role9 = db.fetch(`r9_${message.guild.id}`)
        let role9price = db.fetch(`r9_price_${message.guild.id}`)
        let role10 = db.fetch(`r10_${message.guild.id}`)
        let role10price = db.fetch(`r10_price_${message.guild.id}`)
        
        let r1 = message.guild.roles.cache.find(x => x.id === role1);
        let r2 = message.guild.roles.cache.find(x => x.id === role2);
        let r3 = message.guild.roles.cache.find(x => x.id === role3);
        let r4 = message.guild.roles.cache.find(x => x.id === role4);
        let r5 = message.guild.roles.cache.find(x => x.id === role5);
        let r6 = message.guild.roles.cache.find(x => x.id === role6);
        let r7 = message.guild.roles.cache.find(x => x.id === role7);
        let r8 = message.guild.roles.cache.find(x => x.id === role8);
        let r9 = message.guild.roles.cache.find(x => x.id === role9);
        let r10 =  message.guild.roles.cache.find(x => x.id === role10);
      
        
        let pro1 = `1 - ${r1} - ${role1price} coins`
        let pro2 = `2 - ${r2} - ${role2price} coins`
        let pro3 = `3 - ${r3} - ${role3price} coins`
        let pro4 = `1 - ${r4} - ${role4price} coins`
        let pro5 = `2 - ${r5} - ${role5price} coins`
        let pro6 = `3 - ${r6} - ${role6price} coins`  
        let pro7 = `1 - ${r7} - ${role1
        7price} coins`
        let pro8 = `2 - ${r8} - ${role2price} coins`
        let pro9 = `3 - ${r9} - ${role3price} coins`  
        if(!r1) pro2 = "1 - nothing"
        if(!r2) pro2 = "2 - nothing"
        if(!r3) pro3 = "3 - nothing"
        if(!r4) pro2 = "4 - nothing"
        if(!r5) pro2 = "5 - nothing"
        if(!r6) pro3 = "6 - nothing"
        if(!r3) pro3 = "7 - nothing"
        if(!r4) pro2 = "8 - nothing"
        if(!r5) pro2 = "9 - nothing"
        if(!r6) pro3 = "10 - nothing"
      
        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`${pro1} \n${pro2} \n${pro3}`)
        .setTimestamp();

        message.channel.send(embed);
    }
}