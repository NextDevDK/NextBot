const Discord = require('discord.js');

module.exports = {
    name: 'user-stats',
    description: 'Display info about a user.',
    async execute(message, args, axios) {
        if (args[1] == "--admin") {
            if (message.channel.name == "admin") {
                await message.channel.send("Søger efter " + args[0] + " i databasen.");

                await axios.get('http://api.oz1tnj.dk/skynilla/' + args[0])
                    .then(function (res) {
                        data = res.data.data[0];

                        var dateResult = new Date(data.playtime * 1000).toISOString().substr(11, 8);
                        var avatarUrl = "https://minotar.net/helm/" + data.uuid + "/128";
                        var whitelisted

                        switch (data.whitelisted) {
                            case 1:
                                whitelisted = "Yes"
                                break;
                            case 0:
                                whitelisted = "No"
                                break;
                            default:
                                whitelisted = "Unknown"
                                break;
                        }

                        const embed = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setTitle('SkyNilla Admin Spiller info')
                            .setAuthor(data.name, avatarUrl)
                            .addFields({
                                name: 'Spiller Navn',
                                value: data.name
                            }, {
                                name: 'Spiller UUID',
                                value: data.uuid
                            }, {
                                name: 'Spiller IP',
                                value: data.ip
                            }, {
                                name: 'Spiller Whitelisted',
                                value: whitelisted
                            }, {
                                name: 'Sidst Logget På',
                                value: data.lastseen
                            }, {
                                name: 'Total Spilletid',
                                value: dateResult
                            }, {
                                name: 'Antal Gange Død',
                                value: data.death
                            })
                            .setTimestamp()
                            .setFooter('Lavet Af mrcool1575 Og Toby');

                        message.channel.send(embed);
                    })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + args[0] + " i vores database. Prøv igen!" + error); });
            }
        } else {
            await message.channel.send("Søger efter " + args[0] + " i databasen.");
            await axios.get('http://api.oz1tnj.dk/skynilla/' + args[0])
                .then(function (res) {
                    data = res.data.data[0];
                    var dateResult = new Date(data.playtime * 1000).toISOString().substr(11, 8);
                    var avatarUrl = "https://minotar.net/helm/" + data.uuid + "/128";

                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('SkyNilla Spiller info')
                        .setAuthor(data.name, avatarUrl)
                        .addFields({
                            name: 'Spiller Navn',
                            value: data.name
                        }, {
                            name: 'Sidst Logget På',
                            value: data.lastseen
                        }, {
                            name: 'Total Spilletid',
                            value: dateResult
                        }, {
                            name: 'Antal Gange Død',
                            value: data.death
                        })
                        .setTimestamp()
                        .setFooter('Lavet Af mrcool1575 Og Toby');

                    message.channel.send(embed);
                })
                .catch(function (error) { message.reply("Vi kunne ikke finde " + args[0] + " i vores database. Prøv igen!" + error); });
        }
    },
};
