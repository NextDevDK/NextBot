import { Command } from 'discord-akairo'
import {Message, TextChannel} from "discord.js";
import axios from "axios";


export default class WhitelistCommand extends Command {
    constructor() {
        super("whitelist", {
            aliases: ["whitelist"],
            category: "Owner",
            description: {
                content: "I don't think I need to explain the command",
            },
            ratelimit: 3,
            ownerOnly: true,
            args: [
                {
                    id: "argument",
                    type: "string",
                }
            ]
        });
    }

    public async exec(message: Message, { argument }: { argument: string }): Promise<Message> {
        const channel = this.client.channels.cache.get('824743628755959880') as TextChannel;
        if(message.channel.id != channel.id)
            return message.util.send("Wrong channel! please type in the admin channel")

        const addOptions = {
            key: "f6adf148dd7840dd70cc34aafab7b07b",
            WHITELISTED: 1
        };

        const removeOptions = {
            key: "f6adf148dd7840dd70cc34aafab7b07b",
            WHITELISTED: 0
        };

        switch (argument[0]) {
            case "add":
                await axios.put('http://api.oz1tnj.dk/skynilla/player/whitelist/' + argument[1], addOptions)
                    .then(function (res) {
                        message.channel.send("Added " + argument[1] + " To Whitelist!");
                    })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + argument[1] + " i vores database. Prøv igen!"); });
                break;
            case "remove":
                await axios.put('http://api.oz1tnj.dk/skynilla/player/whitelist/' + argument[1], removeOptions)
                    .then(function (res) {
                        message.channel.send("Removed " + argument[1] + " From Whitelist!");
                    })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + argument[1] + " i vores database. Prøv igen!"); });
                break;
        }
    }
}