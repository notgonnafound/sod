const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "clear massages",


    async run (client, message, args) {
      
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('you dont have permission to do that for administrator only');
      
      const num = args.join("  ");
      if (num > 100) return message.channel.send("until 100 :(")
      await message.channel.messages.fetch({limit: num}).then(messages => {
        message.channel.bulkDelete(messages)
      })
      message.channel.send(`i have clear ${num} messages!`)
    }
}