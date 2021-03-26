const mongo = require('mongoose');

const KickConfig = new mongo.Schema({
    User: {type: String, required: true},
    UserID: {type: String, required: true},
    Reason: {type: String, required: true},
    Moderator: {type: String, required: true},
    ModeratorID: {type: String, required: true},
    Date: {type: String, required: true},
});

module.exports = mongo.model('Kicks', KickConfig);