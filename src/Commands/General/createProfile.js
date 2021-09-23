const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const { saveProfile } = require('../../Structures/Profiles');

const prompts = [
    'Create your bio',
    'What\'s you\'re name?',
    'What operating system do you have?',
    'What\'s your fav. OS?'
];


module.exports = class start extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['createpro', 'cprof', ''],
            description: 'creates your profile',
            category: 'General',
            ownerOnly: false,
        })
    }
    async run(message, args) {
        const channel = message.channel.id;
        if(channel) {
            try {
                const response = await getResponses(message);
                const embed = new MessageEmbed()
                    .addField('Title', response.bio, true)
                    .addField('Prize', response.name, true)
                    .addField('# of winners', response.OS, true)
                    .addField('Duration', response.favOS, false);
                const msg = await message.channel.send('Confirm', { embeds: [embed] });
                await msg.react('👍');
                await msg.react('👎');
                const filter = (reaction, user) => ['👍', '👎'].includes(reaction.emoji.name) && !user.bot && user.id === message.author.id;
                const reactions = await msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']});
                const choise = reactions.get('👎') || reactions.get('👍');

                if(choise.emoji.name === '👍') {
                    response.endsOn = new Date(Date.now() + ms(response.duration));
                    const gembed = new MessageEmbed()
                        .setTitle(response.title)
                        .setColor("#ff0000")
                        .setDescription(`
                        Prize: ${response.prize}\n
                        Number of winners: ${response.winners}\n
                        Ends on: ${response.endsOn}\n
                        **REACT with 🎉 to ENTER**
                        `);
                    const gmsg = await channel.send({embeds: [gembed]});
                    await gmsg.react('🎉');
                    response.messageId = gmsg.id;
                    response.guildId = gmsg.guild.id;
                    response.channelId = gmsg.channel.id
                    await saveProfile(response);
                } else {
                    message.channel.send("No");
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            message.reply("Cannot find the channel.... Maybe it was deleted...")
        }
    }
}

async function getResponses(message) {
    const responses = { }

    for(let i = 0; i < prompts.length; i++) {
        await message.channel.send(prompts[i]);
        const response = await message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1 });
        const { content } = response.first();

        if(i == 0) 
            responses.bio = content;
        else if(i == 1)
            responses.name = content;
        else if(i == 2) {
            response.OS = content;
        }
        else if(i == 3) {
            response.favOS = content;
        }
    }
    return responses;
}