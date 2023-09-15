const { Events } = require("@models");
const Client = require("@client");
const { Message } = require("discord.js");

/**
 * Clase para representar el evento 'messageCreate'.
 * @extends Events
 */
class Ready extends Events {
    constructor() {
        super('messageCreate')
    };

    /**
     * Ejecuta la lógica asociada al evento 'messageCreate'.
     * @param {Client} client - El cliente Discord.js.
     * @param {Message} message - El mensaje recibido.
     */
    async run(client, message) {
        if (message.author?.bot) return;
        if (!message.content.startsWith(client.keys.prefix)) return;
        let args = message.content.slice(client.keys.prefix.length).trim().split(/\s+/g);
        let cmd = client.commands.prefix.get(args[0]) || client.commands.prefix.find((cmd) => cmd.alias && cmd.alias.includes(args[0]));

        if (!cmd || (cmd && !cmd.run)) return;

        if (cmd.dev && !client.keys.devs.includes(message.author.id)) return message.channel.send({ content: "Comando solo para desarrolladores." });

        if (cmd) {
            try {
                console.log("[Comando activado]: ".green + `${args[0]}` + " [User]: ".cyan + message.author.username);
                await cmd.run(client, message, args.slice(1));
            } catch (error) {
                console.log("[Comando Error]: ".red + error.stack.slice(0, 300));
            };
        };
    };
}

module.exports = Ready;
