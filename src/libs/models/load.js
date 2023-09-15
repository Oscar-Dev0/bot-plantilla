const BaseLoad = require("./base/load");
const Client = require("@client");

/**
 * Clase para cargar comandos, interacciones y eventos en el cliente.
 * @extends BaseLoad
 */
class Load extends BaseLoad {
    /**
     * @param {Client} client - El cliente Discord.js.
     */
    constructor(client) {
        super(client);
    }

    /**
     * Carga todos los comandos, interacciones y eventos.
     */
    load_all() {
        this.client.center("╭─────────────────╮".blue);
        this.client.center("│".blue + "  Cargando App   ".cyan + "│".blue);
        this.client.center("╰─────────────────╯".blue);

        // Carga eventos
        this.load('../../../../app/events');
        
        // Carga comandos de prefijo
        this.load('../../../../app/commands/prefix');
        
        // Carga comandos slash
        this.load('../../../../app/commands/slash');
        
        // Carga interacciones de botones
        this.load('../../../../app/interaction/buttons');
        
        // Carga interacciones de menú seleccionable
        this.load('../../../../app/interaction/select_menu');
        
        // Carga interacciones de subcomandos
        this.load('../../../../app/interaction/SubCommands');
        
        // Carga interacciones de modalSubmit
        this.load('../../../../app/interaction/modalSubmit');
    }
}

module.exports = Load;
