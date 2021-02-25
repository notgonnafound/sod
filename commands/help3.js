module.exports = {
    name: "h",
    description: "tag the staff for help",

    async run (client, message, args) {

        const reason = args.join(" ");

       let staffrole = message.guild.roles.cache.find(role => role.name === "staff");
       
       
       if(!message.member.voice.channel) {
         return message.channel.send(`${staffrole} | <@${message.author.id}> need your help \n no voice chat \n reason: `+"`"+`${reason || `no reson`}`+"`")
       }else{
         return message.channel.send(`${staffrole} | <@${message.author.id}> need your help \n voice channel: ${message.member.voice.channel} \n reason: `+"`"+`${reason || `no reson`}`+"`")
       }

    }
}