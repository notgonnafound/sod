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
      let role4 = db.fetch(`r4_${message.guild.id}`)
      let role4price = db.fetch(`r4_price_${message.guild.id}`)
      let role5 = db.fetch(`r5_${message.guild.id}`)
      let role5price = db.fetch(`r5_price_${message.guild.id}`)      
      let role6 = db.fetch(`r6_${message.guild.id}`)
      let role6price = db.fetch(`r6_price_${message.guild.id}`)
      let role7 = db.fetch(`r7_${message.guild.id}`)
      let role7price = db.fetch(`r7_price_${message.guild.id}`)
      let role8 = db.fetch(`r8_${message.guild.id}`)
      let role8price = db.fetch(`r8_price_${message.guild.id}`)
      let role9 = db.fetch(`r9_${message.guild.id}`)
      let role9price = db.fetch(`r9_price_${message.guild.id}`)      
      let role10 = db.fetch(`r10_${message.guild.id}`)
      let role10price = db.fetch(`r10_price_${message.guild.id}`)
      let r1 = message.guild.roles.cache.find(x => x.id === role1);
      let r2 = message.guild.roles.cache.find(x => x.id === role2);
      let r3 = message.guild.roles.cache.find(x => x.id === role3);
      let r4 = message.guild.roles.cache.find(x => x.id === role4);
      let r5 = message.guild.roles.cache.find(x => x.id === role5);
      let r6 = message.guild.roles.cache.find(x => x.id === role6);
      let r7 = message.guild.roles.cache.find(x => x.id === role7);
      let r8 = message.guild.roles.cache.find(x => x.id === role8);
      let r9 = message.guild.roles.cache.find(x => x.id === role9);
      let r10 = message.guild.roles.cache.find(x => x.id === role10);
      
     
      
      
      if(purchase == "1"){
        if (!role1) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role1price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r1}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r1)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role1price)
          db.push(message.author.id, `${r1}`)
          return message.channel.send(`Successfully bought the role ${r1}`)
        }
          if(amount < role1price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r1}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r1)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role1price)
          db.push(message.author.id, `${r1}`)
          return message.channel.send(`Successfully bought the role ${r1}`)
      }
        if(purchase == "2"){
        if (!role2) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role2price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r2}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r2)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role2price)
          db.push(message.author.id, `${r2}`)
          return message.channel.send(`Successfully bought the role ${r2}`)
        }
          if(amount < role2price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r2}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r2)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role2price)
          db.push(message.author.id, `${r2}`)
          return message.channel.send(`Successfully bought the role ${r2}`)
      }
      if(purchase == "3"){
        if (!role3) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role3price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r3}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r3)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role3price)
          db.push(message.author.id, `${r3}`)
          return message.channel.send(`Successfully bought the role ${r3}`)
        }
          if(amount < role3price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r3}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r3)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role3price)
          db.push(message.author.id, `${r3}`)
          return message.channel.send(`Successfully bought the role ${r3}`)
      }
      if(purchase == "4"){
        if (!role4) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role4price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r4}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r4)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role4price)
          db.push(message.author.id, `${r4}`)
          return message.channel.send(`Successfully bought the role ${r4}`)
        }
          if(amount < role4price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r4}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r4)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role4price)
          db.push(message.author.id, `${r4}`)
          return message.channel.send(`Successfully bought the role ${r4}`)
      }
      if(purchase == "5"){
        if (!role5) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role5price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r5}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r5)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role5price)
          db.push(message.author.id, `${r5}`)
          return message.channel.send(`Successfully bought the role ${r5}`)
        }
          if(amount < role5price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r5}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r5)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role5price)
          db.push(message.author.id, `${r5}`)
          return message.channel.send(`Successfully bought the role ${r5}`)
      }
      if(purchase == "6"){
        if (!role6) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role6price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r6}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r6)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role6price)
          db.push(message.author.id, `${r6}`)
          return message.channel.send(`Successfully bought the role ${r6}`)
        }
          if(amount < role6price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r6}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r6)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role6price)
          db.push(message.author.id, `${r6}`)
          return message.channel.send(`Successfully bought the role ${r6}`)
      }
      if(purchase == "7"){
        if (!role7) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role7price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r7}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r7)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role7price)
          db.push(message.author.id, `${r7}`)
          return message.channel.send(`Successfully bought the role ${r7}`)
        }
          if(amount < role7price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r7}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r7)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role7price)
          db.push(message.author.id, `${r7}`)
          return message.channel.send(`Successfully bought the role ${r7}`)
      }
      if(purchase == "8"){
        if (!role8) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role8price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r8}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r8)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role8price)
          db.push(message.author.id, `${r8}`)
          return message.channel.send(`Successfully bought the role ${r8}`)
        }
          if(amount < role8price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r8}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r8)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role8price)
          db.push(message.author.id, `${r8}`)
          return message.channel.send(`Successfully bought the role ${r8}`)
      }
      if(purchase == "9"){
        if (!role9) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role9price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r9}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r9)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role9price)
          db.push(message.author.id, `${r9}`)
          return message.channel.send(`Successfully bought the role ${r9}`)
        }
          if(amount < role9price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r9}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r9)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role9price)
          db.push(message.author.id, `${r9}`)
          return message.channel.send(`Successfully bought the role ${r9}`)
      }
      if(purchase == "10"){
        if (!role10) return message.channel.shend("you cant buy something that not exsissit")
        if(item === null){
          if(amount < role10price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r10}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r10)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role10price)
          db.push(message.author.id, `${r10}`)
          return message.channel.send(`Successfully bought the role ${r10}`)
        }
          if(amount < role10price) return message.channel.send("not enogh money sry")
          if (item.includes(`${r10}`)) return message.channel.send("Already got a that role bro!")
          message.member.roles.add(r10)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, role10price)
          db.push(message.author.id, `${r10}`)
          return message.channel.send(`Successfully bought the role ${r10}`)
      }
      if(purchase) return message.channel.send("only num beatween 1 - 10") 
    }
}