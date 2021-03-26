import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember, TextChannel} from "discord.js";
import moment from "moment";
const BanConfig = require( '../../database/Models/BanConfig');

export default class BanCommand extends Command {
    public constructor() {
        super("unban", {
            aliases: ["unban"],
            category: "Moderation",
            description: {
                content: "unbans a member from the guild",
                usage: "unban [username]",
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
                }
            ]
        });
    }
    public async exec(message: Message, { member }: { member: GuildMember }): Promise<Message> {
        const person = message.mentions.members.first() || message.guild.members.cache.get(member[0]);

        if(!person)
            return message.reply("Invalid args");

        await message.guild.members.unban(person.id);
        await message.util.send("Unbanned " + person.user.tag);
    }
}