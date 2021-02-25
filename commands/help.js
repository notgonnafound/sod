module.exports = {
    name: "helpme",
    description: "tag the staff for help",

    async run (client, message, args) {

        const reason = args.join(" ");

       let staffrole = message.guild.roles.cache.find(role => role.name === "staff");
       let mem = message.author
       
       if (mem.voice.channel) {
       let voice = mem.voice.channel.name
       message.channel.send(`${staffrole} | ${message.author.tag} need your help \n voice channel: ${voice} \n reason: ${reason}`)
       }else{
       message.channel.send(`${staffrole} | ${message.author.tag} need your help \n `)
       }
    }
}