const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "resetmoney",
    "aliases":['sm','setm'],
    description: "Work your a** off",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('go fuck your self you dont have prem hahaha');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
         
            db.delete(`money_${message.guild.id}_${user.id}`)
            let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
            message.channel.send(`${user}, coins has reset`)
        
    }
}