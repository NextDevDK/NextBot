const Discord = require('discord.js');

module.exports = {
    name: 'user-stats',
    description: 'Display info about a user.',
    async execute(message, args, con) {
        var ps = 'SELECT * FROM user_data WHERE NAME = ?';

        if (args[1] == "--admin") {
            if (message.channel.name == "admin") {
                await message.channel.send("Søger efter "+args[0]+" i databasen.");
                await con.query(ps, args[0], function (err, result, fields) {
                    if (err) throw err;
                    if (result.length > 0) {
                        var dateResult = new Date(result[0].PLAYTIME * 1000).toISOString().substr(11, 8);
                        var avatarUrl = "https://minotar.net/helm/"+result[0].UUID+"/128";
                        var whitelisted
        
                        switch (result[0].WHITELISTED) {
                            case true:
                                whitelisted = "Yes"
                                break;
                            case false:
                                whitelisted = "No"
                                break;
                            default:
                                whitelisted = "Unkown"
                                break;
                        }

                        const embed = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setTitle('SkyNilla Admin Spiller info')
                            .setAuthor(result[0].NAME, avatarUrl)
                            .addFields({
                                name: 'Spiller Navn',
                                value: result[0].NAME
                            }, {
                                name: 'Spiller UUID',
                                value: result[0].UUID
                            }, {
                                name: 'Spiller IP',
                                value: result[0].IP
                            },{
                                name: 'Spiller Whitelisted',
                                value: whitelisted
                            }, {
                                name: 'Sidst Logget På',
                                value: result[0].LASTSEEN
                            }, {
                                name: 'Total Spilletid',
                                value: dateResult
                            }, {
                                name: 'Antal Gange Død',
                                value: result[0].DEATH
                            },)
                            .setTimestamp()
                            .setFooter('Lavet Af mrcool1575 Og Toby');
        
                        message.channel.send(embed);
        
                    } else {
                        message.reply("Vi kunne ikke finde " + args[0] + " i vores database. Prøv igen!");
                    }
                });
            }
        } else {
            await message.channel.send("Søger efter "+args[0]+" i databasen.");
            await con.query(ps, args[0], function (err, result, fields) {
                if (err) throw err;
                if (result.length > 0) {
                    var dateResult = new Date(result[0].PLAYTIME * 1000).toISOString().substr(11, 8);
                    var avatarUrl = "https://minotar.net/helm/"+result[0].UUID+"/128";
    
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('SkyNilla Spiller info')
                        .setAuthor(result[0].NAME, avatarUrl)
                        .addFields({
                            name: 'Spiller Navn',
                            value: result[0].NAME
                        }, {
                            name: 'Sidst Logget På',
                            value: result[0].LASTSEEN
                        }, {
                            name: 'Total Spilletid',
                            value: dateResult
                        }, {
                            name: 'Antal Gange Død',
                            value: result[0].DEATH
                        },)
                        .setTimestamp()
                        .setFooter('Lavet Af mrcool1575 Og Toby');
    
                    message.channel.send(embed);
    
                } else {
                    message.reply("Vi kunne ikke finde " + args[0] + " i vores database. Prøv igen!");
                }
            });
        }
    },
};
