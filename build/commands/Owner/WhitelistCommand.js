"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const axios_1 = __importDefault(require("axios"));
class WhitelistCommand extends discord_akairo_1.Command {
    constructor() {
        super("whitelist", {
            aliases: ["whitelist"],
            category: "Owner",
            description: {
                content: "I don't think I need to explain the command",
            },
            ratelimit: 3,
            ownerOnly: true,
            args: [
                {
                    id: "argument",
                    type: "string",
                }
            ]
        });
    }
    async exec(message, { argument }) {
        const channel = this.client.channels.cache.get('824743628755959880');
        if (message.channel.id != channel.id)
            return message.util.send("Wrong channel! please type in the admin channel");
        const addOptions = {
            key: "f6adf148dd7840dd70cc34aafab7b07b",
            WHITELISTED: 1
        };
        const removeOptions = {
            key: "f6adf148dd7840dd70cc34aafab7b07b",
            WHITELISTED: 0
        };
        switch (argument[0]) {
            case "add":
                await axios_1.default.put('http://api.oz1tnj.dk/skynilla/player/whitelist/' + argument[1], addOptions)
                    .then(function (res) {
                    message.channel.send("Added " + argument[1] + " To Whitelist!");
                })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + argument[1] + " i vores database. Prøv igen!"); });
                break;
            case "remove":
                await axios_1.default.put('http://api.oz1tnj.dk/skynilla/player/whitelist/' + argument[1], removeOptions)
                    .then(function (res) {
                    message.channel.send("Removed " + argument[1] + " From Whitelist!");
                })
                    .catch(function (error) { message.reply("Vi kunne ikke finde " + argument[1] + " i vores database. Prøv igen!"); });
                break;
        }
    }
}
exports.default = WhitelistCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hpdGVsaXN0Q29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9Pd25lci9XaGl0ZWxpc3RDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBQXdDO0FBRXhDLGtEQUEwQjtBQUcxQixNQUFxQixnQkFBaUIsU0FBUSx3QkFBTztJQUNqRDtRQUNJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSw2Q0FBNkM7YUFDekQ7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBRSxVQUFVO29CQUNkLElBQUksRUFBRSxRQUFRO2lCQUNqQjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBd0I7UUFDbEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBZ0IsQ0FBQztRQUNwRixJQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaURBQWlELENBQUMsQ0FBQTtRQUUvRSxNQUFNLFVBQVUsR0FBRztZQUNmLEdBQUcsRUFBRSxrQ0FBa0M7WUFDdkMsV0FBVyxFQUFFLENBQUM7U0FDakIsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxrQ0FBa0M7WUFDdkMsV0FBVyxFQUFFLENBQUM7U0FDakIsQ0FBQztRQUVGLFFBQVEsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLEtBQUssS0FBSztnQkFDTixNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsaURBQWlELEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztxQkFDdkYsSUFBSSxDQUFDLFVBQVUsR0FBRztvQkFDZixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3BFLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4SCxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDO3FCQUMxRixJQUFJLENBQUMsVUFBVSxHQUFHO29CQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztnQkFDeEUsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hILE1BQU07U0FDYjtJQUNMLENBQUM7Q0FDSjtBQW5ERCxtQ0FtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nXHJcbmltcG9ydCB7TWVzc2FnZSwgVGV4dENoYW5uZWx9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGl0ZWxpc3RDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIndoaXRlbGlzdFwiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcIndoaXRlbGlzdFwiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3duZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiSSBkb24ndCB0aGluayBJIG5lZWQgdG8gZXhwbGFpbiB0aGUgY29tbWFuZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgICAgICAgIG93bmVyT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImFyZ3VtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgYXJndW1lbnQgfTogeyBhcmd1bWVudDogc3RyaW5nIH0pOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICBjb25zdCBjaGFubmVsID0gdGhpcy5jbGllbnQuY2hhbm5lbHMuY2FjaGUuZ2V0KCc4MjQ3NDM2Mjg3NTU5NTk4ODAnKSBhcyBUZXh0Q2hhbm5lbDtcclxuICAgICAgICBpZihtZXNzYWdlLmNoYW5uZWwuaWQgIT0gY2hhbm5lbC5pZClcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFwiV3JvbmcgY2hhbm5lbCEgcGxlYXNlIHR5cGUgaW4gdGhlIGFkbWluIGNoYW5uZWxcIilcclxuXHJcbiAgICAgICAgY29uc3QgYWRkT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAga2V5OiBcImY2YWRmMTQ4ZGQ3ODQwZGQ3MGNjMzRhYWZhYjdiMDdiXCIsXHJcbiAgICAgICAgICAgIFdISVRFTElTVEVEOiAxXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAga2V5OiBcImY2YWRmMTQ4ZGQ3ODQwZGQ3MGNjMzRhYWZhYjdiMDdiXCIsXHJcbiAgICAgICAgICAgIFdISVRFTElTVEVEOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudFswXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkXCI6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoJ2h0dHA6Ly9hcGkub3oxdG5qLmRrL3NreW5pbGxhL3BsYXllci93aGl0ZWxpc3QvJyArIGFyZ3VtZW50WzFdLCBhZGRPcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoXCJBZGRlZCBcIiArIGFyZ3VtZW50WzFdICsgXCIgVG8gV2hpdGVsaXN0IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgbWVzc2FnZS5yZXBseShcIlZpIGt1bm5lIGlra2UgZmluZGUgXCIgKyBhcmd1bWVudFsxXSArIFwiIGkgdm9yZXMgZGF0YWJhc2UuIFByw7h2IGlnZW4hXCIpOyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoJ2h0dHA6Ly9hcGkub3oxdG5qLmRrL3NreW5pbGxhL3BsYXllci93aGl0ZWxpc3QvJyArIGFyZ3VtZW50WzFdLCByZW1vdmVPcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoXCJSZW1vdmVkIFwiICsgYXJndW1lbnRbMV0gKyBcIiBGcm9tIFdoaXRlbGlzdCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IG1lc3NhZ2UucmVwbHkoXCJWaSBrdW5uZSBpa2tlIGZpbmRlIFwiICsgYXJndW1lbnRbMV0gKyBcIiBpIHZvcmVzIGRhdGFiYXNlLiBQcsO4diBpZ2VuIVwiKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=