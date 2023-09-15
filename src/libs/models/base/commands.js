const Client = require("@client");
const { Message } = require("discord.js");
const Base = require("./base");

/**
 * Clase para representar comandos de prefijo.
 * @extends Base
 */
class PrefixCommands extends Base {
    /**
     * @param { {
     *     name: string;
     *     alias?: string[];
     *     dev?: boolean;}
     * } options - Opciones del comando de prefijo.
     */
    constructor(options) {
        super();
        this.name = options.name;
        this.alias = options.alias;
        this.dev = options.dev;
    }

    /**
     * Ejecuta la lógica del comando de prefijo.
     * @param {Client} client - El cliente Discord.js.
     * @param {Message} message - El mensaje que activó el comando.
     * @param {string[]} args - Los argumentos del comando.
     * @returns {any | Promise<any>} Resultado de la ejecución.
     */
    run(client, message, args) {}
}

module.exports = { PrefixCommands };
