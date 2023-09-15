const Client = require("@client");
const { AnySelectMenuInteraction, ApplicationCommandData, ButtonInteraction, CommandInteraction, ModalSubmitInteraction } = require("discord.js");
const Base = require("./base");

/**
 * Clase para representar botones interactivos.
 * @extends Base
 */
class Buttons extends Base {
    /**
     * @param {string} customID - El ID personalizado del botón.
     */
    constructor(customID) {
        super();
        this.customID = customID;
    }

    /**
     * Ejecuta la lógica del botón.
     * @param {Client} client - El cliente Discord.js.
     * @param {ButtonInteraction} int - La interacción del botón.
     * @returns {any | Promise<any>} Resultado de la ejecución.
     */
    run(client, int) { }
}

/**
 * Clase para representar menús seleccionables.
 * @extends Base
 */
class SelectMenu extends Base {
    /**
     * @param {string} customID - El ID personalizado del menú seleccionable.
     */
    constructor(customID) {
        super();
        this.customID = customID;
    }

    /**
     * Ejecuta la lógica del menú seleccionable.
     * @param {Client} client - El cliente Discord.js.
     * @param {AnySelectMenuInteraction} int - La interacción del menú seleccionable.
     * @returns {any | Promise<any>} Resultado de la ejecución.
     */
    run(client, int) {}
}

/**
 * Clase para representar comandos slash.
 * @extends Base
 */
class SlashCommands extends Base {
    /**
     * @param {ApplicationCommandData} options - Opciones del comando slash.
     */
    constructor(options) {
        super();
        this.name = options.name;
        this.toJson = options;
    }

    /**
     * Ejecuta la lógica del comando slash.
     * @param {Client} client - El cliente Discord.js.
     * @param {CommandInteraction} int - La interacción del comando slash.
     * @returns {any | Promise<any>} Resultado de la ejecución.
     */
    run(client, int) {}
}

/**
 * Clase para representar subcomandos slash.
 * @extends Base
 */
class SubCommands extends Base {
    /**
     * @param {string} name - El nombre del subcomando slash.
     */
    constructor(name) {
        super();
        this.name = name;
    }

    /**
     * Ejecuta la lógica del subcomando slash.
     * @param {Client} client - El cliente Discord.js.
     * @param {CommandInteraction} int - La interacción del subcomando slash.
     * @returns {any | Promise<any>} Resultado de la ejecución.
     */
    run(client, int) {}
}

/**
 * Clase para representar modales de presentación.
 * @extends Base
 */
class ModalSubmit extends Base {
    /**
     * @param {string} customID - El ID personalizado del modal de presentación.
     */
    constructor(customID) {
        super();
        this.customID = customID;
    }

    /**
     * Ejecuta la lógica del modal de presentación.
     * @param {Client} client - El cliente Discord.js.
     * @param {ModalSubmitInteraction} int - La interacción del modal de presentación.
     * @param {Object} data - Datos adicionales (opcional).
     * @returns {any | Promise<any>} Resultado de la ejecución.
     */
    run(client, int, data = {}) {}
}

module.exports = {
    Buttons,
    SelectMenu,
    SlashCommands,
    SubCommands,
    ModalSubmit
};
