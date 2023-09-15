const Client = require("@client");
const { Buttons } = require("@models");
const { ButtonInteraction, CacheType } = require("discord.js");

/**
 * Clase para representar un ejemplo de botón interactivo.
 * @extends Buttons
 */
class Example extends Buttons {
    constructor(){
        super("example");
    };

    /**
     * Ejecuta la lógica asociada al botón interactivo.
     * @param {Client} client - El cliente Discord.js.
     * @param {ButtonInteraction<CacheType>} int - La interacción del botón.
     */
    run(client, int) {

    };
}

module.exports = Example;
