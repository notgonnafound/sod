const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "setmoney",
    "aliases":['sm','setm'],
    description: "Work your a** off",

    async run (client, message, args) {
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
      

  
            let amount = args[1]; 
            db.set(`money_${message.guild.id}_${user.id}`, amount)
            let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
            message.channel.send(`${user}, coins has set to `+"``"+`${amount}`+"``"+` coins`)
        
    }
}