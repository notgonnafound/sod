module.exports = {
    name: "h",
    description: "tag the staff for help",

    async run (client, message, args) {

        const reason = args.join(" ");

       let staffrole = message.guild.roles.cache.find(role => role.name === "Staff");
       let hstaffrole = message.guild.roles.cache.find(role => role.name === "High Staff");
       const talkedRecently = new Set();
      
       if(!message.member.voice.channel) {
         return message.channel.send(`${staffrole} | ${hstaffrole} | <@${message.author.id}> need your help \n no voice chat \n reason: `+"`"+`${reason || `no reson`}`+"`")
       }else{
         return message.channel.send(`${staffrole} | ${hstaffrole} | <@${message.author.id}> need your help \n voice channel: ${message.member.voice.channel} \n reason: `+"`"+`${reason || `no reson`}`+"`")
       }

    }
}