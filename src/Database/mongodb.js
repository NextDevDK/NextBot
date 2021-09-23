const chalk = require('chalk');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Nextbot', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
