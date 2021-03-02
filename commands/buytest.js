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
      
      let role1 = db.fetch(`r1_${message.guild.id}`)
      let role1price = db.fetch(`r1_price_${message.guild.id}`)
      let role2 = db.fetch(`r2_${message.guild.id}`)
      let role2price = db.fetch(`r2_price_${message.guild.id}`)      
      let role3 = db.fetch(`r3_${message.guild.id}`)
      let role3price = db.fetch(`r3_price_${message.guild.id}`) 
      let r1 = message.guild.roles.cache.find(x => x.id === role1);
      let r2 = message.guild.roles.cache.find(x => x.id === role2);
      let r3 = message.guild.roles.cache.find(x => x.id === role3);
      
     
      
      
      if(purchase == "1"){
        if (!role1) return message.channel.shend("sry but i dident found it")
        if(item === null){
          if(amount < role1price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r1}`)) return message.chnnael.send("Already got a that role bro!")
          message.member.roles.add(r1)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role1price)
          db.push(message.author.id, `${r1}`)
          message.channel.send(`Successfully bought the role ${r1}`)
        }
          if(amount < role1price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r1}`)) return message.chnnael.send("Already got a that role bro!")
          message.member.roles.add(r1)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role1price)
          db.push(message.author.id, `${r1}`)
          message.channel.send(`Successfully bought the role ${r1}`)
      }
        if(purchase == "2"){
        if (!role2) return message.channel.shend("sry but i dident found it")
        if(item === null){
          if(amount < role2price) return message.channel.send("not enogh money sry")
        }
          if(amount < role1price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r1}`)) return message.chnnael.send("Already got a that role bro!")
          message.member.roles.add(r1)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role1price)
          db.push(message.author.id, `${r1}`)
          message.channel.send(`Successfully bought the role ${r1}`)
      }
    }
}