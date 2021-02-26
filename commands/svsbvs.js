let used = new Set();


module.exports = {
    name: "he",
    description: "tag the staff for help",

    async run (client, message, args) {

      if (used.has(message.author.id)){
       message.channel.send("you have to wait 30 sec")  
      }else{
      
        
                const reason = args.join(" ");

       let tester17 = message.guild.roles.cache.find(role => role.id === "802256057031196672");
       
       
       if(!message.member.voice.channel) {
          message.channel.send(`${tester17} |  <@${message.author.id}> want test for 17+ \n no voice chat`)
       }else{
          message.channel.send(`${tester17} |  <@${message.author.id}> want test for 17+ \n voice channel: ${message.member.voice.channel} `)
       }

        
        
        used.add(message.author.id);
        setTimeout(() => {
          used.delete(message.author.id)
        },30000)
      }

    }
}