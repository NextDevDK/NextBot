import { Listener } from "discord-akairo";
import moment from "moment";
const { Connect } = require('../../database/Mongo');

export default class readyListener extends Listener {
    public constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }

    public async exec(): Promise<void> {
        await Connect();
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        console.log([`
            ${this.client.user.tag} is now online and ready!
            Developers: Nemijah#5469 and mrcool1575#7254
            Creation Date: ${moment(this.client.user.createdAt).format('LT')} ${moment(this.client.user.createdAt).format('LL')} ${moment(this.client.user.createdAt).fromNow()}
            Bot ID: ${this.client.user.id}
            Current date: ${cDay}/${cMonth}/${cYear}
       `].join('\n'));
    }
}