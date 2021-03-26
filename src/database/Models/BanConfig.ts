const mongoose = require('mongoose');

const BanConfig = new mongoose.Schema({
    User: {type: String, required: true},
    UserID: {type: String, required: true},
    Reason: {type: String, required: true},
    Moderator: {type: String, required: true},
    ModeratorID: {type: String, required: true},
    Date: {type: String, required: true},
    Expires: {type: String, required: true},
    Active: {type: Boolean, required: true},
});

module.exports = mongoose.model('Bans', BanConfig);