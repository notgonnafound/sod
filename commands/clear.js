const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "clear massages",


    async run (client, message, args) {
      
      const num = args.join("  ");
      await message.channel.messages.fetch({limit: num}).then(messages => {
        message.channel.bulkDelete(messages)
      })
      message.channel.send(`i have clear ${num} messages!`)
    }
}