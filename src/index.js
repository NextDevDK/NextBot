const NextBot = require('./Structures/NextBot');
const config = require('../config.json');
const client = new NextBot(config);
client.start();