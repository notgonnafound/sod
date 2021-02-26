let used = new Set();


module.exports = {
    name: "he",
    description: "tag the staff for help",

    async run (client, message, args) {

      if (used.has(message.author.id)){
      return message.channel.send("you have to wait 30 sec")  
      }else{
        
                const reason = args.join(" ");

       let staffrole = message.guild.roles.cache.find(role => role.name === "Staff");
       let hstaffrole = message.guild.roles.cache.find(role => role.name === "High Staff");
       
       if(!message.member.voice.channel) {
          message.channel.send(`${staffrole} | ${hstaffrole} | <@${message.author.id}> need your help \n no voice chat \n reason: `+"`"+`${reason || `no reson`}`+"`")
       }else{
          message.channel.send(`${staffrole} | ${hstaffrole} | <@${message.author.id}> need your help \n voice channel: ${message.member.voice.channel} \n reason: `+"`"+`${reason || `no reson`}`+"`")
       }

        
        used.add(message.author.id);
        setTimeout(() => {
          used.delete(message.author.id)
        },5000)
      }

    }
}