const Client = require("@client");
const { SubCommands } = require("@models");
const { CommandInteraction, CacheType } = require("discord.js");

/**
 * Clase para representar un ejemplo de subcomando slash.
 * @extends SubCommands
 */
class Example extends SubCommands {
    constructor(){
        super("example");
    };

    /**
     * Ejecuta la lógica asociada al subcomando slash.
     * @param {Client} client - El cliente Discord.js.
     * @param {CommandInteraction<CacheType>} int - La interacción del subcomando slash.
     */
    run(client, int) {

    }
}

module.exports = Example;
