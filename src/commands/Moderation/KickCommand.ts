import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember, TextChannel} from "discord.js";
import moment from "moment";
const KickConfig = require('../../database/Models/KickConfig');

export default class KickCommand extends Command {
    public constructor() {
        super("kick", {
            aliases: ["kick"],
            category: "Moderation",
            description: {
                content: "kicks a member from the guild",
                usage: "kick [username] [reason]",
            },
            userPermissions: ['KICK_MEMBERS' || "ADMINISTRATOR"],
            clientPermissions: ['KICK_MEMBERS' || "ADMINISTRATOR"],
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    prompt: {
                        start: (msg: Message) => `${msg.author}, please provide a member to ban...`,
                        retry: (msg: Message) => `${msg.author}, please provide a vaild member to ban...`
                    }
                },
                {
                    id: "reason",
                    match: "rest",
                    type: "string"
                }
            ]
        });
    }
    public async exec(message: Message, { member, reason }: { member: GuildMember, reason: string}): Promise<Message> {
        const channel = this.client.channels.cache.get('822057953644773387') as TextChannel;

        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to kick ${member.user.tag}`);

        await member.kick(reason)

        await channel.send(new MessageEmbed()
            .setAuthor(` ${message.author.tag} | has kicked`, message.author.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "Moderator: ", value: `${message.author.tag} (\`${message.author.id}\`)`, inline: true},
                { name: "Username ", value: `${member.user.tag} (\`${member.id}\`)` , inline: true},
                { name: "Date ", value: `${moment(message.createdAt).format('LT')} ${moment(message.createdAt).format('LL')} ${moment(message.createdAt).fromNow()}` , inline: false},
                { name: "Reason ", value: `${reason}` , inline: true},
            )
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        )

        const kicks = new KickConfig({
            User: member.user.tag,
            UserID: member.id,
            Reason: reason,
            Moderator: message.author.tag,
            ModeratorID: message.author.id,
            Date: message.createdAt,
        });
        await kicks.save();
    }
}