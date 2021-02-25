module.exports = {
    name: "helpme",
    description: "tag the staff for help",

    async run (client, message, args) {

        const reason = args.join(" ");

       let staffrole = message.guild.roles.cache.find(role => role.name === "staff");
       let mem = message.author
       
       if (message.member.voiceChannel) {
       let voice = message.member.voiceChannel
       message.channel.send(`${staffrole} | ${message.author.tag} need your help \n voice channel: ${voice} \n reason: ${reason}`)
       }else{
       message.channel.send(`${staffrole} | <@${message.author.id}> need your help \n no voice chat \n reason: `+"`"+`${reason}`+"`")
       }
    }
}