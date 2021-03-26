import { Command } from "discord-akairo";
import { VultrexHaste } from 'vultrex.haste';
import { inspect } from "util";
import {Message} from "discord.js";
const { Type } = require('@extreme_hero/deeptype');
const haste = new VultrexHaste({url: "https://haste.bin"})

export default class EvalCommand extends Command {
    public constructor() {
        super("eval", {
            aliases: ["eval"],
            category: "Owner",
            description: {
                content: "Evaluates javascript"
            },
            ownerOnly: true,
            ratelimit: 3,
            args: [
                {
                    id: "argumentss",
                    type: "string"
                }
            ]
        });
    }
    public async  exec(message: Message, { argumentss }: { argumentss: string }): Promise<any> {
        const msg = message;
        if(argumentss.length == 0)
            return message.reply("Please provide javascript to evaluate...")

        let code;
        code = code.replace(/[""]/g, '"').replace(/[""]/g, "'");
        let evaled;

        try {
            const start = process.hrtime();
            evaled = eval(code);
            if(evaled instanceof Promise) {
                evaled = await evaled;
            }

            const stop = process.hrtime(start);
            const response = [
                `**Output:** \`\`\`js\n${this.clean(inspect(evaled, {depth: 0}))}\n\`\`\``,
                `**Type:** \`\`\`ts\n${new Type(evaled).is}\n\`\`\``,
                `**Time taken:** \`\`\`${(((stop[0] * 1e0) + stop[1])) / 1e6}ms \`\`\``
            ]
            const res = response.join('\n');
            if(res.length < 2000) {
                await msg.channel.send(res);
            } else {
                await haste.post(res);
            }
        } catch(e) {
            return message.channel.send(`Error: \`\`\`x1\n${this.clean(e)}\n\`\`\``);
        }
    };

    clean(text) {
        if(typeof text === 'string') {
            text = text
                .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                .replace(/@/g, `@${String.fromCharCode(8203)}`)
                .replace(new RegExp(this.client.token, 'gi'), 'No token for you bitch')
        }
        return text;
    }
}