"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const moment_1 = __importDefault(require("moment"));
const { Connect } = require('../../database/Mongo');
class readyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    async exec() {
        await Connect();
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        console.log([`
            ${this.client.user.tag} is now online and ready!
            Developers: Nemijah#5469 and mrcool1575#7254
            Creation Date: ${moment_1.default(this.client.user.createdAt).format('LT')} ${moment_1.default(this.client.user.createdAt).format('LL')} ${moment_1.default(this.client.user.createdAt).fromNow()}
            Bot ID: ${this.client.user.id}
            Current date: ${cDay}/${cMonth}/${cYear}
       `].join('\n'));
    }
}
exports.default = readyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY2xpZW50L3JlYWR5TGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBMEM7QUFDMUMsb0RBQTRCO0FBQzVCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVwRCxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDL0M7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDYixNQUFNLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7OzZCQUVMLGdCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFO3NCQUN6SixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNiLElBQUksSUFBSSxNQUFNLElBQUksS0FBSztRQUMzQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBdkJELGdDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCB7IENvbm5lY3QgfSA9IHJlcXVpcmUoJy4uLy4uL2RhdGFiYXNlL01vbmdvJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkeUxpc3RlbmVyIGV4dGVuZHMgTGlzdGVuZXIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwicmVhZHlcIiwge1xyXG4gICAgICAgICAgICBlbWl0dGVyOiBcImNsaWVudFwiLFxyXG4gICAgICAgICAgICBldmVudDogXCJyZWFkeVwiLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJjbGllbnRcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGF3YWl0IENvbm5lY3QoKTtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBjRGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBjTW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBsZXQgY1llYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFtgXHJcbiAgICAgICAgICAgICR7dGhpcy5jbGllbnQudXNlci50YWd9IGlzIG5vdyBvbmxpbmUgYW5kIHJlYWR5IVxyXG4gICAgICAgICAgICBEZXZlbG9wZXJzOiBOZW1pamFoIzU0NjkgYW5kIG1yY29vbDE1NzUjNzI1NFxyXG4gICAgICAgICAgICBDcmVhdGlvbiBEYXRlOiAke21vbWVudCh0aGlzLmNsaWVudC51c2VyLmNyZWF0ZWRBdCkuZm9ybWF0KCdMVCcpfSAke21vbWVudCh0aGlzLmNsaWVudC51c2VyLmNyZWF0ZWRBdCkuZm9ybWF0KCdMTCcpfSAke21vbWVudCh0aGlzLmNsaWVudC51c2VyLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICBCb3QgSUQ6ICR7dGhpcy5jbGllbnQudXNlci5pZH1cclxuICAgICAgICAgICAgQ3VycmVudCBkYXRlOiAke2NEYXl9LyR7Y01vbnRofS8ke2NZZWFyfVxyXG4gICAgICAgYF0uam9pbignXFxuJykpO1xyXG4gICAgfVxyXG59Il19