const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "addmoney",
    description: "Work your a** off",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('go fuck your self you dont have prem hahaha');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
      

  
            let amount = args[1]; 
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
            message.channel.send(`${user}, you got `+"``"+`${amount}`+"``"+` coins \n now you have `+"``"+`${bal}`+"``"+` coins`)
        
    }
}