const Discord = require('discord.js');

const client = new Discord.Client();

const { token, default_prefix } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');

const config = require('./config.json');
client.config = config;

const db = require('quick.db');



const { GiveawaysManager } = require('discord-giveaways');



client.commands = new Discord.Collection();
//You can change the prefix if you like. It doesn't have to be ! or ;
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setActivity(`If I'm online, you might be recorded`)
});


let stats = {
    serverID: '<ID>',
    total: "<ID>",
    member: "<ID>",
    bots: "<ID>"
}



client.on('guildMemberAdd', member => {
    if (member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
    if (member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);


})

client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if (prefix === null) prefix = default_prefix;

    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);

    if(!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);


        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args) || client.commands.find(a => a.aliases && a.aliases.includes(command));

        } catch (error) {
            console.error(error);
        }
})

client.login(token);