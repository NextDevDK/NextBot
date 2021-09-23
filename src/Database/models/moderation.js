const { Schema, model } = require('mongoose');

const moderationSchema = new Schema({
    guildId: { type: String, required: true },
    guildName: { type: String, required: true },
    memeberId: { type: String, required: true },
    member: { type: String, required: true },
    moderatorId: { type: String, required: true },
    caseId: { type: Number, required: false, default: 1 },
});


module.exports = model('Moderation', moderationSchema);