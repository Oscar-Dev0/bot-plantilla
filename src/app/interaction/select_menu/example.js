const Client = require("@client");
const { SelectMenu } = require("@models");
const { AnySelectMenuInteraction } = require("discord.js");

/**
 * Clase para representar un ejemplo de menú seleccionable.
 * @extends SelectMenu
 */
class Example extends SelectMenu {
    constructor(){
        super("example");
    };

    /**
     * Ejecuta la lógica asociada al menú seleccionable.
     * @param {Client} client - El cliente Discord.js.
     * @param {AnySelectMenuInteraction} int - La interacción del menú seleccionable.
     */
    run(client, int) {

    }
}

module.exports = Example;
