const mongoose = require('mongoose');

const GiveawaySchema = new mongoose.Schema({
    guildId: { type: String, required: true},
    bio: { type: String, required: true},
    name: { type: String, required: true},
    os: { type: String, required: true},
    favOs: { type: String, required: true},
    createdOn: { type: Date, required: true},
});

module.exports = mongoose.model('Profiles', GiveawaySchema);