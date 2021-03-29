import { Command } from 'discord-akairo';
import {DMChannel, Message, NewsChannel, TextChannel} from "discord.js";

export default class  PurgeCommand extends  Command {
    public constructor() {
        super("purge", {
            aliases: ["clear", "cls"],
            category: "Moderation",
            userPermissions: ['MANAGE_MESSAGES'],
            description: {
                content: "deletes x amount of messages",
                usage: "clear 10"
            },
            ratelimit: 3,
            args: [
                {
                    id: "amount",
                    type: (msg: Message, str: string) => {
                        return Number(str)
                    }
                }
            ]
        });
    }

    public async exec(message: Message, { amount }: { amount: number}): Promise<Message> {
        const args2 = message.content.split(' ').slice(1);
        const amounts = args2.join(' ');

        if (!amounts) return message.reply('You haven\'t given an amount of messages which should be deleted!');
        if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!');

        if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!');
        if (amount < 1) return message.reply('You have to delete at least 1 message!');

        await message.channel.messages.fetch({
            limit: amount
        }).then(messages => {
            if(message.channel instanceof TextChannel) {
                message.channel.bulkDelete(messages);
                message.channel.send("I deleted " + messages.size + " messages").then(res => res.delete({ timeout: 3000 }))
            } else {
                return;
            }
        });
    }
}