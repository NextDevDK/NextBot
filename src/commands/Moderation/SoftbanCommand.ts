import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember, TextChannel} from "discord.js";
import moment from "moment";


export default class BanCommand extends Command {
    public constructor() {
        super("tempban", {
            aliases: ["tempban"],
            category: "Moderation",
            description: {
                content: "tempbans a member from the guild",
                usage: "tempban [username] [reason] [time]",
            },
            userPermissions: ['BAN_MEMBERS' || "ADMINISTRATOR"],
            clientPermissions: ['BAN_MEMBERS' || "ADMINISTRATOR"],
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
                },
                {
                    id: "time",
                    type: (msg: Message, str: string) => {
                        return Number(str)
                    }
                }
            ]
        });
    }
    public async exec(message: Message, { member, reason, time }: { member: GuildMember, reason: string, time: number}): Promise<Message> {
        const channel = this.client.channels.cache.get('822057953644773387') as TextChannel;

        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to ban ${member.user.tag}`);

        await message.guild.members.ban(member.id, { days: time, reason: reason})

        await channel.send(new MessageEmbed()
            .setAuthor(` ${message.author.tag} | has banned`, message.author.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "Moderator: ", value: `${message.author.tag} (\`${message.author.id}\`)`, inline: true},
                { name: "Username ", value: `${member.user.tag} (\`${member.id}\`)` , inline: true},
                { name: "Reason ", value: `${reason}` , inline: true},
                { name: "Date ", value: `${moment(message.createdAt).format('LT')} ${moment(message.createdAt).format('LL')} ${moment(message.createdAt).fromNow()}` , inline: false},
                { name: "Active ", value: "true" , inline: true},
                { name: "Duration ", value: time + " day(s)" , inline: true},
            )
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        )
    }
}