const Event = require('../../Structures/Event');
const guildSchema = require('../../Database/models/Guilds');

module.exports = class shardError extends Event {
    constructor(...args) {
        super(...args, {
            once: true
        })
    };

    async run(message,err) {
        const guild = guildSchema.findOne({name: guildId});

        const channel = guild.channels.cache.find(c => c.name === 'general');
        
        console.log(channel);
    }
}