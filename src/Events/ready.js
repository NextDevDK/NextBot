const Event = require('../Structures/Event');

const config = require('../../config.json');

const chalk = require('chalk');
const figlet = require('figlet');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		/*
		console.log([
			`Logged in as ${this.client.user.tag}`,
			`Loaded ${this.client.commands.size} commands!`,
			`Loaded ${this.client.events.size} events!`
		].join('\n'));
		*/

		console.log(chalk.magenta(figlet.textSync('Next Bot', {
			font: '3D-ASCII',
			horizontalLayout: 'default',
			verticalLayout: 'default',
			width: 80,
			whitespaceBreak: true
		})));

		const dateTimestamp = new Date(Date.now());
		const dateObject = new Date(dateTimestamp); // Convert to a date time object first
		// const dateObject = new Date(dateTimeString); // for date time string

		const hours = dateObject.getHours(); // get hours with getHours method
		const minutes = dateObject.getMinutes(); // get minutes with getMinutes method
		const seconds = dateObject.getSeconds(); // get seconds with getSeconds method
		const Currentyear = new Date(Date.now());
		const year = Currentyear.getFullYear();

		console.log(chalk.cyan(`${this.client.user.username} started at ${hours}:${minutes}:${seconds}/${year}`))
	}
};