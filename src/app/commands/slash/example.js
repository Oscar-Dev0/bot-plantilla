const Client = require("@client");
const { SlashCommands } = require("@models");
const { CacheType, CommandInteraction } = require("discord.js");

/**
 * Clase para representar un ejemplo de comando slash.
 * @extends SlashCommands
 */
class Example extends SlashCommands {
    constructor(){
        super({
            name: "example",
            description: "Ejemplo"
        });
    };

    /**
     * Ejecuta la lógica asociada al comando slash.
     * @param {Client} client - El cliente Discord.js.
     * @param {CommandInteraction<CacheType>} int - La interacción del comando slash.
     */
    run(client, int) {
        // Tu lógica aquí
    }
}

module.exports = Example;
