const { Schema, model } = require('mongoose');


const guildSchema = new Schema({
    guildId: { type: String, required: true },
    guildName: { type: String, required: true },
    guildOwner: { type: String, required: true },
    guildBans: { type: Number, required: true },
    guildRoles: { type: Number, required: true }
});


module.exports = model('Guilds', guildSchema);

