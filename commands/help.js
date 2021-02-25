module.exports = {
    name: "helpme",
    description: "tag the staff for help",

    async run (client, message, args) {

        const reason = args.join(" ");

       let staffrole = message.guild.roles.cache.find(role => role.name === "staff");
       let mem = message.author
       
       if(!message.member.voice.channel) {
         return message.channel.send(`${staffrole} | <@${message.author.id}> need your help \n no voice chat \n reason: `+"`"+`${reason}`+"`")
       }else{
         return message.channel.send(`${staffrole} | <@${message.author.id}> need your help \n voice channel: ${message.member.voice.channel} \n reason: `+"`"+`${reason}`+"`")
       }

    }
}