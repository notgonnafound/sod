module.exports = {
    name: "helpme",
    description: "tag the staff for help",

    async run (client, message, args) {

        const reason = args.join(" ");

       let staffrole = message.guild.roles.find("name","staff")
       let voice = message.author
       
       message.channel.send(`${staffrole} | ${message.author.tag} need your help \n `)

    }
}