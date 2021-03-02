const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buytest",
    description: "View your inventory",


    async run (client, message, args) {
    
      let purchase = args.join(" ");
      let items = await db.fetch(message.author.id, { items: [] });
      let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
      let item = await db.fetch(message.author.id);
      if(items === null)
    }
}