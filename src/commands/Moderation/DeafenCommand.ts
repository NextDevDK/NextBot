import { Command } from "discord-akairo";
import { MessageEmbed, Message, GuildMember, TextChannel, VoiceChannel } from "discord.js";
import moment from "moment";

export default class  DeafenCommand extends  Command {
    constructor() {
        super("deafen", {
            aliases: ["deafen"],
            category: "Moderation",
            description: {
                content: "deafens a user in the voice channel",
                usage: "deafen @user <reason>"
            },
            userPermissions: ['DEAFEN_MEMBERS' || 'ADMINISTRATOR'],
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    prompt: {
                        start: (msg: Message) => `${msg.author}, please provide a member to deafen`,
                        retry: (msg: Message) => `${msg.author}, please provide a valid member`
                    }
                },
                {
                    id: "reason",
                    type: "string",
                    match: "rest"
                }
            ]
        });
    }

    public  async exec(message: Message, { member, reason }:  { member: GuildMember, reason: string}): Promise<Message> {

        if(member.roles.highest.position >= message.member.roles.highest.position && member.id === message.guild.ownerID)
            return message.channel.send("You cannot deafen " + member.user.tag);

        if(!reason)
            return message.reply("You must provide a reason...");

        if(member.voice.channel) {
            await member.voice.setDeaf(true);
            await message.util.send(new MessageEmbed()
                .setAuthor(`${message.author.tag} deafened | ${member.user.tag}` + member.user.displayAvatarURL({ dynamic: true }))
                .addFields(
                    { name: "Username ", value: `${member.user.tag}  (\`${member.id}\`)`, inline: true},
                    { name: "Moderator ", value: `${message.author.tag}  (\`${message.author.id}\`)`, inline: true},
                    { name: "Date ", value: `${moment(message.createdAt).format('LT')} ${moment(message.createdAt).format('LL')} ${moment(message.createdAt).fromNow()}`, inline: false},
                    { name: "Reason ", value: `${reason} `, inline: true},
                )
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            );
        } else {
            await message.reply(member.user.tag + " is not in a voice channel");
        }
    }
}