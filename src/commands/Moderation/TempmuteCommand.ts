import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember, TextChannel} from "discord.js";
import moment from "moment";
import ms from 'ms';

export default class BanCommand extends Command {
    public constructor() {
        super("tempmute", {
            aliases: ["tempmute"],
            category: "Moderation",
            description: {
                content: "tempmute a member from the guild",
                usage: "tempmute [username] [reason] [time]",
            },
            userPermissions: ['MANAGE_ROLES' || "ADMINISTRATOR"],
            clientPermissions: ['MANAGE_ROLES' || "ADMINISTRATOR"],
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
                    type: "string",
                    match: "rest",
                },
                {
                    id: "time",
                    type: (msg: Message, str: string) => {
                        return Number(ms(str))
                    },
                    prompt: {
                        start: (msg: Message) => `${msg.author}, you must provide a time`,
                        retry: (msg: Message) => `${msg.author}, you must provide a vaild time`
                    }
                }
            ]
        });
    }
    public async exec(message: Message, { member, reason, time }: { member: GuildMember, reason: string, time: number }): Promise<Message> {
        const channel = this.client.channels.cache.get('822057953644773387') as TextChannel;
        const role = message.guild.roles.cache.find(r => r.name === 'Muted')

        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to ban ${member.user.tag}`);

        if(!role)
            return message.reply("The role " + role + " doesn't exist")

        member.roles.add(role);

        setTimeout(() => {
            member.roles.remove(role)
        },ms())

        await channel.send(new MessageEmbed()
            .setAuthor(` ${message.author.tag} | has muted`, message.author.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "Moderator: ", value: `${message.author.tag} (\`${message.author.id}\`)`, inline: true},
                { name: "Username ", value: `${member.user.tag} (\`${member.id}\`)` , inline: true},
                { name: "Reason ", value: `${reason}` , inline: true},
                { name: "Date ", value: `${moment(message.createdAt).format('LT')} ${moment(message.createdAt).format('LL')} ${moment(message.createdAt).fromNow()}` , inline: false},
                { name: "Active ", value: "true" , inline: true},
                { name: "Expires ", value: "Never" , inline: true},
            )
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        )
    }
}