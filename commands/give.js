const db = require('quick.db');
const ms = require('parse-ms');
const { default_prefix } = require('../config.json')
module.exports = {
    name: "give",
    description: "Work your a** off",

    async run (client, message, args) {
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      let prefix = await db.get(`prefix_${message.guild.id}`);
    if (prefix === null) prefix = default_prefix;  
      if(isNaN(args[1])){
          return message.channel.send(`pls use ${default_prefix}give amount`)
        }else return message.channel.send("good")
        
      if (db.fetch(`money_${message.guild.id}_${message.author.id}`) > args[1]) return message.channel.send("not enogh money sry")

  
            let amount = args[1]; 
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
            message.channel.send(`${user}, you got `+"``"+`${amount}`+"``"+` coins \n now you have `+"``"+`${bal}`+"``"+` coins`)
        
    }
}