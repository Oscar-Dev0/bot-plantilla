const Client = require("@client");
const { ModalSubmit } = require("@models");
const { CacheType, ModalSubmitInteraction } = require("discord.js");

/**
 * Clase para representar un ejemplo de modal de presentación.
 * @extends ModalSubmit
 */
class Example extends ModalSubmit {
    constructor(){
        super("example");
    };

    /**
     * Ejecuta la lógica asociada al modal de presentación.
     * @param {Client} client - El cliente Discord.js.
     * @param {ModalSubmitInteraction<CacheType>} int - La interacción del modal de presentación.
     * @param {Object} data - Datos adicionales (opcional).
     */
    run(client, int, data = {}) {
       
    };
}

module.exports = Example;
