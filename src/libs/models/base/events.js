const Client = require("@client");
const { ClientEvents } = require("discord.js");
const Base = require("./base");

/**
 * Clase para representar eventos Discord.
 * @extends Base
 */
class Events extends Base {
    /**
     * @type {keyof ClientEvents}
     * @param {keyof ClientEvents} options - Nombre del evento Discord.
     */
    constructor(options) {
        super();
        /**
         * @type {keyof ClientEvents}
         */
        this.name = options;
    }

    /**
     * Ejecuta la lógica asociada al evento Discord.
     * @param {Client} client - El cliente Discord.js.
     * @param {...any} args - Argumentos adicionales para el evento.
     * @returns {any | Promise<any>} Resultado de la ejecución.
     */
    run(client, ...args) {}
}

module.exports = { Events };
