const ProfilesModel = require('../Database/models/ProfilesModel');

async function saveProfile(response) {
    const { bio, name, os, favOS, guildId } = response;

    const profiles = new ProfilesModel({
        guildId,
        bio,
        name,
        os,
        favOS,
        createdOn: new Date(),
    });
    return profiles.save();
}