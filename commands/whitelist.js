const Discord = require('discord.js');

module.exports = {
    name: 'whitelist',
    description: 'Whitelist user',
    async execute(message, args, con) {
        if (!message.channel.name == "admin") return message.channel.send("Please write this in the admin channel!!!");

        var psAdd = 'UPDATE user_data SET WHITELISTED=1 WHERE NAME=?';
        var psRemove = 'UPDATE user_data SET WHITELISTED=0 WHERE NAME=?';
        switch(args[0]) {
            case "add":
                await con.query(psAdd, args[1], function (err, result) {
                    if (err) throw err;
                    message.channel.send("Added "+args[1]+" To Whitelist!");
                });
            break;
            case "remove":
                await con.query(psRemove, args[1], function (err, result) {
                    if (err) throw err;
                    message.channel.send("Removed "+args[1]+" From Whitelist!");
                });
            break;
        }
    },
};
