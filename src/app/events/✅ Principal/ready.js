const { Events } = require("@models");
const Client = require("@client");

/**
 * Clase para representar el evento 'ready'.
 * @extends Events
 */
class Ready extends Events {
    constructor() {
        super('ready')
    };

    /**
     * Ejecuta la lógica asociada al evento 'ready'.
     * @param {Client} client - El cliente Discord.js.
     */
    async run(client) {
        client.center("╭────────────────╮".blue);
        client.center("│".blue + "  Bot Prendido  ".green + "│".blue);
        client.center("╰────────────────╯".blue);

        setTimeout(async () => {
            try {
                client.center("╭───────────────────────────╮".blue);
                client.center("│".blue + "  Cargando Comandos Slash  ".green + "│".blue);
                client.center("╰───────────────────────────╯".blue);

                await client.application.commands.set(client.commands.slash.map(x => x.toJson));
            } catch (error) {
                client.center("#".blue + ' Error Comandos '.red + '#'.blue);
                console.log(error.stack.slice(0, 500));
            };

        }, 10000)
    };
}

module.exports = Ready;
