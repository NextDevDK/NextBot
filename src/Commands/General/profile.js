const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class profile extends Command {
    constructor(...args) {
        super(...args, {
            name: "profile",
            aliases: ["pro"],
            description: "I'll think of sometinh",
            guildOnly: true
        })
    }
    async run (message, args) {
        try {
            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
            if(!user) return message.reply("No user?");

            message.channel.send({ embeds: [ embed ]});
        } catch(err) {
            message.reply(err.message);
        }

    }
}