const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "coins",
    description: "how mutch money you have",

    async run (client, message, args) {

      
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
        if(amount >= 1) return message.channel.send("you have no coins")
        message.channel.send(`You Have ${amount} coins`)
      
    }
}