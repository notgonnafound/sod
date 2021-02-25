const db = require('quick.db');  

module.exports = {
    name: "coins",
    description: "how mutch money you have",

    async run (client, message, args) {

      
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
        if(amount == null) {
          return message.channel.send("you have no coins")
        }else{
        message.channel.send(`You Have ${amount} coins`)
        }
    }
}