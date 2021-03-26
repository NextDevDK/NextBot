"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
class botClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command`,
                    timeout: "You took to long, the command has been canceled...",
                    ended: "You exceeded the maximum amount of retries",
                    cancel: "Command canceled",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = botClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9ib3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUEyQztBQWMzQyxNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUE2Qi9DLFlBQW1CLE1BQWtCO1FBQ2pDLEtBQUssQ0FBQztZQUNGLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN6QixDQUFDLENBQUM7UUE5QkEsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNoRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDN0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsZUFBTTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFO29CQUNKLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRywyQ0FBMkM7b0JBQ25HLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRywyQ0FBMkM7b0JBQ25HLE9BQU8sRUFBRSxvREFBb0Q7b0JBQzdELEtBQUssRUFBRSw0Q0FBNEM7b0JBQ25ELE1BQU0sRUFBRSxrQkFBa0I7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2hCO1lBQ0QsaUJBQWlCLEVBQUUsZUFBTTtTQUM1QixDQUFDLENBQUM7UUFRQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU8sS0FBSyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUM3QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFwREQsNEJBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWthaXJvQ2xpZW50LCBDb21tYW5kSGFuZGxlciwgTGlzdGVuZXJIYW5kbGVyIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgIHsgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiZGlzY29yZC1ha2Fpcm9cIiB7XHJcbiAgICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgICAgICBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI7XHJcbiAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb3RPcHRpb25zIHtcclxuICAgIHRva2VuPzogc3RyaW5nLFxyXG4gICAgb3duZXJzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xyXG4gICAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcclxuICAgIHB1YmxpYyBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xyXG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJsaXN0ZW5lcnNcIilcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XHJcbiAgICAgICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxyXG4gICAgICAgIHByZWZpeDogcHJlZml4LFxyXG4gICAgICAgIGFsbG93TWVudGlvbjogdHJ1ZSxcclxuICAgICAgICBoYW5kbGVFZGl0czogdHJ1ZSxcclxuICAgICAgICBjb21tYW5kVXRpbDogdHJ1ZSxcclxuICAgICAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXHJcbiAgICAgICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXHJcbiAgICAgICAgYXJndW1lbnREZWZhdWx0czoge1xyXG4gICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgIG1vZGlmeVN0YXJ0OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZGAsXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlSZXRyeTogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmRgLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogXCJZb3UgdG9vayB0byBsb25nLCB0aGUgY29tbWFuZCBoYXMgYmVlbiBjYW5jZWxlZC4uLlwiLFxyXG4gICAgICAgICAgICAgICAgZW5kZWQ6IFwiWW91IGV4Y2VlZGVkIHRoZSBtYXhpbXVtIGFtb3VudCBvZiByZXRyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6IFwiQ29tbWFuZCBjYW5jZWxlZFwiLFxyXG4gICAgICAgICAgICAgICAgcmV0cmllczogMyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDNlNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvdGhlcndpc2U6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnNcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBCb3RPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBvd25lcklEOiBjb25maWcub3duZXJzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2luaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcclxuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xyXG4gICAgfVxyXG59Il19