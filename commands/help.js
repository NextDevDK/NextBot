const { MessageEmbed } = require("discord.js")

    module.exports = {
        name: 'help',
        async execute(message, args) {
            const cmd = client.commands.get(args[0]);

            const embed = new MessageEmbed()
                .setAuthor(`${cmd.help.name} | Help`, client.user.displayAvatarURL())
                .setColor(0xffffff)
                .setDescription(`**Name:** ${cmd.help.name}\n**Description:** ${cmd.help.description}`);
            message.channel.send(embed);
        }
    }