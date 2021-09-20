const Event = require('../Structures/Event');

const config = require('../../config.json');
require('../Database/mongodb');
const chalk = require('chalk');
const figlet = require('figlet');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		console.log(chalk.magenta(figlet.textSync('Next Bot', {
			font: '3D-ASCII',
			horizontalLayout: 'default',
			verticalLayout: 'default',
			width: 80,
			whitespaceBreak: true
		})));

		const dateTimestamp = new Date(Date.now());
		const dateObject = new Date(dateTimestamp); 

		const hours = dateObject.getHours(); 
		const minutes = dateObject.getMinutes(); 
		const seconds = dateObject.getSeconds(); 
		const Currentyear = new Date(Date.now());
		const year = Currentyear.getFullYear();

		console.log(chalk.cyan(`${this.client.user.username} started at ${hours}:${minutes}:${seconds}/${year}`))
	}
};