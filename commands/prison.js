const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: "jail",
    description: "prison member",


    async run (client, message, args) {
  let staffrole = message.guild.roles.cache.find(x => x.id === "814599275446927408")
  let mem = message.guild.member(message.author)
  if (mem.roles.cache.has(staffrole)){
        let presonmem = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if (presonmem === message.author) return message.channel.send("you cant jail your self")
      let logs = message.guild.channels.cache.find(x => x.id === "816788429656293446")
      if(!presonmem) return message.channel.send("pls mention a user pls");
      let role = message.guild.roles.cache.find(x => x.id === "802194119757004820");
      let memrole = message.guild.roles.cache.find(x => x.id === "801774226700894209");
      let time = args[1];
      if(!time) return message.channel.send("how mutch time thr preson is gonna be?");
      let reason = args.slice(2).join(" ");
      await(presonmem.roles.add(role));
      presonmem.roles.remove(memrole)
      
      const embed = new Discord.MessageEmbed()
      .setTitle("new presoner")
      .addField("the new prisoner is:", presonmem)
      .addField("got preson for rhe reason:", reason)
      .addField(`got preson for:`, ms(ms(time)))
      .addField(`the man who take him to jail:`, message.author)
      logs.send(embed)
      
      
      setTimeout(function(){
        presonmem.roles.remove(role)
        presonmem.roles.add(role)
      }, ms(time))
      
  }else return message.channel.send("no perm :(")
    }
}