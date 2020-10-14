const Discord = require('discord.js');

module.exports = {
    name: 'user-stats',
    description: 'Display info about a user.',
    async execute(message, args, axios) {
        if (args[1] == "--admin") {
            if (message.channel.name == "admin") {
                await message.channel.send("Søger efter " + args[0] + " i databasen.");

                await axios.get('http://api.oz1tnj.dk/skynilla/player/' + args[0])
                    .then(function (res) {
                        var dateResult = new Date(res.data.PLAYTIME * 1000).toISOString().substr(11, 8);
                        var avatarUrl = "https://minotar.net/helm/" + res.data.UUID + "/128";
                        var whitelisted

                        switch (res.data.WHITELISTED) {
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
                            .setAuthor(res.data.NAME, avatarUrl)
                            .addFields({
                                name: 'Spiller Navn',
                                value: res.data.NAME
                            }, {
                                name: 'Spiller UUID',
                                value: res.data.UUID
                            }, {
                                name: 'Spiller IP',
                                value: res.data.IP
                            }, {
                                name: 'Spiller Whitelisted',
                                value: whitelisted
                            }, {
                                name: 'Sidst Logget På',
                                value: res.data.LASTSEEN
                            }, {
                                name: 'Total Spilletid',
                                value: dateResult
                            }, {
                                name: 'Antal Gange Død',
                                value: res.data.DEATH
                            })
                            .setTimestamp()
                            .setFooter('Lavet Af mrcool1575 Og Toby');

                        message.channel.send(embed);
                    })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + args[0] + " i vores database. Prøv igen!"); });
            }
        } else {
            await message.channel.send("Søger efter " + args[0] + " i databasen.");
            await axios.get('http://api.oz1tnj.dk/skynilla/player/' + args[0])
                .then(function (res) {
                    var dateResult = new Date(res.data.PLAYTIME * 1000).toISOString().substr(11, 8);
                    var avatarUrl = "https://minotar.net/helm/" + res.data.UUID + "/128";

                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('SkyNilla Spiller info')
                        .setAuthor(res.data.NAME, avatarUrl)
                        .addFields({
                            name: 'Spiller Navn',
                            value: res.data.NAME
                        }, {
                            name: 'Sidst Logget På',
                            value: res.data.LASTSEEN
                        }, {
                            name: 'Total Spilletid',
                            value: dateResult
                        }, {
                            name: 'Antal Gange Død',
                            value: res.data.DEATH
                        })
                        .setTimestamp()
                        .setFooter('Lavet Af mrcool1575 Og Toby');

                    message.channel.send(embed);
                })
                .catch(function (error) { message.reply("Vi kunne ikke finde " + args[0] + " i vores database. Prøv igen!"); });
        }
    },
};
