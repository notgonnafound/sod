module.exports = {
    name: "17+",
    description: "test for role 17+",

    async run (client, message, args) {

        const reason = args.join(" ");

       let tester17 = message.guild.roles.cache.find(role => role.id === "802256057031196672");
       
       
       if(!message.member.voice.channel) {
         return message.channel.send(`${tester17} |  <@${message.author.id}> want test for 17+ \n no voice chat`)
       }else{
         return message.channel.send(`${tester17} |  <@${message.author.id}> want test for 17+ \n voice channel: ${message.member.voice.channel} `)
       }

    }
}