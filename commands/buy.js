const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let r1 = message.guild.roles.cache.find(x => x.id === "815428440433360899");
        let r2 = message.guild.roles.cache.find(x => x.id === "815428498264031263");
        if(purchase === '1'){
            if (db.has(`variable`, { items: ["r1"] })){
                return message.reply("Already got a that role bro!")

} else {
            if(amount < 500) return message.channel.send('You do not have enough money to buy this role. Please try another one');
            user.roles.add(role);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "r1");
            message.channel.send(`Successfully bought the role ${r1}`)
        }
    }
        if(purchase === '2'){
            if (db.has(`variable`, { items: ["r2"] })){
                return message.reply("Already got a that role bro!")

} else {
            if(amount < 500) return message.channel.send('You do not have enough money to buy this role. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "r2");
            message.channel.send(`Successfully bought the role ${r2}`)
        }
    }
    }
}