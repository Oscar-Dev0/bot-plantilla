const Client = require("@client");
const { Events } = require("@models");

/**
 * Clase de ejemplo que representa un evento personalizado.
 * @extends Events
 */
class Example extends Events {
    /**
     * Crea una instancia de Example.
     */
    constructor(){
        super('debug')
    };

    /**
     * Método que se ejecuta cuando se dispara el evento.
     * @param {Client} client - El cliente Discord.js.
     * @param {...any} args - Argumentos adicionales para el evento.
     */
    run(client, ...args) {
        // Lógica del evento
    }
}

module.exports = Example;
