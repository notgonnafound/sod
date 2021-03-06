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
          return message.channel.send(`pls use ${prefix}give <amount>`)
        }
        
      
      let amountfrom = db.fetch(`money_${message.guild.id}_${message.author.id}`);
      let amountto = args[1];
      
      if (amountto > amountfrom) return message.channel.send("not enogh money sry")

  
      
      message.channel.send("are you sure you wanna do it? answer only with yes or no")
      message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000, error:["err!"]})
      .then(collected =>{  
        if(collected.first().content.toLowerCase() === "yes"){
            db.add(`money_${message.guild.id}_${user.id}`, amountto)
            db.subtract(`money_${message.guild.id}_${message.author.id}`, amountto)
            let bal = db.fetch(`money_${message.guild.id}_${user.id}`);
            message.channel.send(`${user}, got `+"``"+`${amountto}`+"``"+` coins \n now s/he have `+"``"+`${bal}`+"``"+` coins`)
        }
        if(collected.first().content.toLowerCase() === "no") {
          message.channel.send("oof")
        }
        else if (collected.first().content.toLowerCase() !== "no" || "yes"){
          message.channel.send("invalid respone")
        }
        
        
      }).catch(() => {return message.channel.send("no time try again")})
            
            db.add(`money_${message.guild.id}_${user.id}`, amountto)
            db.subtract(`money_${message.guild.id}_${message.author.id}`, amountto)
            let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
            message.channel.send(`${user}, got `+"``"+`${amountto}`+"``"+` coins \n now s/he have `+"``"+`${bal}`+"``"+` coins`)
        
    }
}