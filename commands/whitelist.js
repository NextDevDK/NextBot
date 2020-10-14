const Discord = require('discord.js');

module.exports = {
    name: 'whitelist',
    description: 'Whitelist user',
    async execute(message, args, axios) {
        if (!message.channel.name == "admin") return message.channel.send("Please write this in the admin channel!!!");

        const addOptions = {
            key: "f6adf148dd7840dd70cc34aafab7b07b",
            WHITELISTED: 1
        };

        const removeOptions = {
            key: "f6adf148dd7840dd70cc34aafab7b07b",
            WHITELISTED: 0
        };

        switch (args[0]) {
            case "add":
                await axios.put('http://api.oz1tnj.dk/skynilla/player/whitelist/' + args[1], addOptions)
                    .then(function (res) {
                        message.channel.send("Added " + args[1] + " To Whitelist!");
                    })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + args[1] + " i vores database. Prøv igen!"); });
                break;
            case "remove":
                await axios.put('http://api.oz1tnj.dk/skynilla/player/whitelist/' + args[1], removeOptions)
                    .then(function (res) {
                        message.channel.send("Removed " + args[1] + " From Whitelist!");
                    })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + args[1] + " i vores database. Prøv igen!"); });
                break;
        }
    },
};
