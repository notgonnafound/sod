const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inv",
    description: "View your inventory",


    async run (client, message, args) {
      
      const num = args.join("  ");
      await message.channel.messages.fetch({limit: num}).then(messages => {
        message.channel.bulkDelete()
      })
      
    }
}