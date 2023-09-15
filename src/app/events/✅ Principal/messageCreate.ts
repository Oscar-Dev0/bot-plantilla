import Client from "@client";
import { Events } from "@models";
import { Message } from "discord.js";

export class Ready extends Events {
    constructor() {
        super('messageCreate')
    };

    async run(client: Client, message: Message) {
        if (message.author?.bot) return;
        if (!message.content.startsWith(client.keys.prefix!)) return;
        let args = message.content.slice(client.keys.prefix!.length).trim().split(/\s+/g);
        let cmd = client.commands.prefix.get(args[0]) || client.commands.prefix.find((cmd) => cmd.alias && cmd.alias.includes(args[0]));

        if (!cmd || cmd && !cmd.run) return;




        if (cmd.dev && !client.keys.devs.includes(message.author.id)) return message.channel.send({ content: "Comando solo de developers." })
        if (cmd) {
            try {
                console.log("[Comando activado]: ".green + `${args[0]}` + "[User]: ".cyan + message.author.username)
                await cmd.run(client, message, args.slice(1));
            } catch (error) {
                console.log("[Comando Error]: ".red + error.stack.slice(0, 300) )
            };
        };
    };
};