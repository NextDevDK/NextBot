import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember, TextChannel} from "discord.js";
;

export default class BanCommand extends Command {
    public constructor() {
        super("unmute", {
            aliases: ["unmute"],
            category: "Moderation",
            description: {
                content: "mutes a member from the guild",
                usage: "mute [username] [reason]",
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
            ]
        });
    }
    public async exec(message: Message, { member }: { member: GuildMember }): Promise<Message> {
        const channel = this.client.channels.cache.get('822057953644773387') as TextChannel;
        const role = message.guild.roles.cache.find(r => r.name === 'Muted')


        if(!role)
            return message.reply("The role " + role + " doesn't exist")

        member.roles.remove(role);
        await channel.send(message.author.tag + " unmuted " + member.user.tag)
    }
}